import Router from 'koa-router'

import { app, run } from 'sp-base/server'
import { router as reactRouter, createConfigureStore } from '../client'
import { template } from '../html'
import isomorphic from 'sp-react-isomorphic'
import serverCustomRouter from './router'




// 项目配置 -----------------------------------------------------------------------

// 打包结果目标目录
const distPathName = 'dist'

// 同构配置
const isomorphicOptions = {
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
}

// 项目配置 - 结束 ------------------------------------------------------------------




// 中间件 --------------------------------------------------------------------------
// react 同构
// isomorphicOptions属性列表routes, configStore, template, distPathName, fnInjectJs, objInjection
app.use(isomorphic(isomorphicOptions))

// ejs 模板引擎
const views = require('sp-koa-views')
app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

// 静态文件服务（TODO:后续可优化使用Nginx代理）
const convert = require('koa-convert')
const koaStatic = require('koa-static')
app.use(convert(koaStatic(process.cwd() + '/' + distPathName + '/public')))



// koa-router 路由扩展（方便sp-auth的acl[access control list]使用）
// - 创建代理root路由，目的是把所有子路由挂载到同一个路由对象上
// - 挂载自定义路由
// const serverRootRouter = new Router()
// const proxyRootRouter = {
//     use: (subRouter) => {
//         serverRootRouter.use('', subRouter.routes(), subRouter.allowedMethods())
//     },
//     root: serverRootRouter
// }
// proxyRootRouter.use(serverCustomRouter)
// app.use(serverRootRouter)


// 中间件 结束  ----------------------------------------------------------------------




// - TODO:挂载features 
// serviceMount(proxyRootRouter, app)




//
const argv = require('yargs').argv
run(argv.sport)