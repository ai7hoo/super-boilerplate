const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const acl = require('sp-auth/middleware')
const config = require('./config')


const instance = require('./instance')

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


app.use(acl(config.acl, instance.authService))


//
const body = require('koa-body');
app.use(body({
    'formLimit': '5mb',
    'jsonLimit': '5mb',
    'textLimit': '5mb'
}))


// ejs 模板引擎
const views = require('sp-koa-views')
app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

app.use(router.routes())


module.exports = app
