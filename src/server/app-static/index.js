const Koa = require('koa')
const app = new Koa()
const koaStatic = require('koa-static')
const convert = require('koa-convert')


const rootPath = process.cwd() + '/public/static'
const option = {
    maxage: 0,
    hidden: true,
    index: 'index.html',
    defer: false,
    gzip: true,
    extensions: false
}
app.use(convert(koaStatic(rootPath, option)))


module.exports = app