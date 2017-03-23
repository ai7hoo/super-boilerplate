import { middleware as koaMiddleware, router as koaRouter, run, commonMiddlewares } from 'sp-base/server'
import { router as reactRouter, createConfigureStore } from '../client'
import { template } from '../html'
import isomorphic from 'sp-react-isomorphic'
import { mount as serviceMount } from './services'
import Router from 'koa-router'
import serverCustomRouter from './router'




// 项目配置 -----------------------------------------------------------------------

// 打包结果目标目录
const distPathName = 'dist'

// 同构配置
// const isomorphicOptions = {
//     // react-router 配置对象
//     routes: reactRouter.get(),

//     // redux store 对象
//     configStore: createConfigureStore(),

//     // HTML基础模板
//     template: template,

//     // 打包结果目标目录，如果为空默认为 /dist
//     distPathName: distPathName,

//     // 对HTML基础模板的自定义注入
//     injection: {
//         // js: (args) => `<script src="${args.path}/client.js"></script>`,
//         critical: (args) => `<script src="${args.path}/critical.js"></script>`
//     }
// }

// 项目配置 - 结束 ------------------------------------------------------------------



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
proxyRootRouter.use(serverCustomRouter)

// - 挂载service路由
serviceMount(proxyRootRouter, koaMiddleware)


// react 同构中间件
// routes, configStore, template, distPathName, fnInjectJs, objInjection
koaMiddleware.use(isomorphic({
    // react-router 配置对象
    routes: reactRouter.get(),

    // redux store 对象
    configStore: createConfigureStore(),

    // HTML基础模板
    template: template,

    // 打包结果目标目录，如果为空默认为 /dist
    distPathName: distPathName,

    // 对HTML基础模板的自定义注入
    injection: {
        // js: (args) => `<script src="${args.path}/client.js"></script>`,
        critical: (args) => `<script src="${args.path}/critical.js"></script>`
    }
}))

// server view
const views = require('sp-koa-views')
koaMiddleware.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

// 静态文件服务中间件
const convert = require('koa-convert')
const koaStatic = require('koa-static')
koaMiddleware.use(convert(koaStatic(process.cwd() + '/' + distPathName + '/public')))

koaRouter.use(serverRootRouter)

//
const argv = require('yargs').argv
run(argv.sport)