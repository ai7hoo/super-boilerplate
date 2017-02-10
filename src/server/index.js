import { middleware as koaMiddleware, router as koaRouter, run, commonMiddlewares } from 'sp-base/server'
import { router as reactRouter, createConfigureStore } from '../client'
import { template } from '../html'
import isomorphic from 'sp-react-isomorphic'
import { mount as serviceMount } from './services'
import Router from 'koa-router'

// koa middleware

// 通用中间件
commonMiddlewares(koaMiddleware)


// 挂载服务端扩展路由

const serverRootRouter = new Router()

// - 创建代理root路由，目的是把所有子路由挂载到同一个路由对象上
const proxyRootRouter = {
    use: (subRouter) => {
        serverRootRouter.use('', subRouter.routes(), subRouter.allowedMethods())
    },
    root: serverRootRouter
}

// - 挂载自定义路由
// proxyRootRouter.use(serverCustomRouter)

// - 挂载service路由
serviceMount(proxyRootRouter, koaMiddleware)


// react 同构中间件
const configureStore = createConfigureStore()
koaMiddleware.use(isomorphic(reactRouter.get(), configureStore, template))

// 静态文件服务中间件
const convert = require('koa-convert')
const koaStatic = require('koa-static')
koaMiddleware.use(convert(koaStatic(process.cwd() + '/dist/public')))

koaRouter.use(serverRootRouter)

//
const argv = require('yargs').argv
run(argv.sport)