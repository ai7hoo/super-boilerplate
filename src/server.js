
import { middleware, router, run, commonMiddlewares } from 'sp-base/server'
import { router as reactRouter, createConfigureStore } from './client'
import { template } from './html'

// koa middleware

// 通用中间件
commonMiddlewares(middleware)

// react 同构中间件
const isomorphic = require('sp-react-isomorphic')
const configureStore = createConfigureStore()
middleware.use(isomorphic(reactRouter.get(), configureStore, template))

// 静态文件服务中间件
const convert = require('koa-convert')
const koaStatic = require('koa-static')
middleware.use(convert(koaStatic(process.cwd() + '/dist/public')))

//
run()
