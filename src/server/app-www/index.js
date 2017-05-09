const Koa = require('koa')
const app = new Koa()



// ejs 模板引擎
const views = require('sp-koa-views')
app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))


module.exports = app