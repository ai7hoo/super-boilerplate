import { app, run } from 'sp-base/server'
import { router as reactRouter, createConfigureStore } from '../client'
import { template } from '../html'
import mountMiddlewares from './middlewares'
import isomorphic from 'sp-react-isomorphic'

const compose = require('koa-compose');
require('dotenv').config();


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


// 挂载中间件
mountMiddlewares(app, { isomorphicOptions })


app.keys = ['super-project-app']

// 判断域名
app.use(async function subApp(ctx, next) {
    ctx.state.subapp = ctx.hostname.split('.')[0]
    await next()
});

// 对接响应的子app处理逻辑
app.use(async function composeSubapp(ctx) {
    let app = null
    switch (ctx.state.subapp) {
        case 'api':
            app = require('./app-api')
            await compose(app.middleware)(ctx)
            break
        case 'www':
            app = require('./app-www')
            app.use(isomorphic(isomorphicOptions))
            await compose(app.middleware)(ctx)
            break
        default:
            ctx.redirect(ctx.protocol + '://' + 'www.' + ctx.host + ctx.path + ctx.search)
            break
    }
});


// - TODO:挂载features 
// serviceMount(proxyRootRouter, app)




//
const argv = require('yargs').argv
run(argv.sport)