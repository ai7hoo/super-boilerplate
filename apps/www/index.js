const Koa = require('koa')
const app = new Koa()

const config = require('./config')

//
require('./global')
require('./instance')

//
app.use(async(ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms} ms`)
})

//
const koaStatic = require('koa-static')
app.use(koaStatic(config.staticPath, {
    maxage: 0,
    hidden: true,
    index: 'index.html',
    defer: false,
    gzip: true,
    extensions: false
}))

// ejs 模板引擎
const views = require('sp-koa-views')
app.use(views(config.viewsPath, {
    extension: 'ejs'
}))

//
const bodyParser = require('koa-bodyparser');
app.use(bodyParser())

// 
app.use(require('./router/admin').routes())
app.use(require('./router/upload').routes())
app.use(require('./router/website').routes())

module.exports = app