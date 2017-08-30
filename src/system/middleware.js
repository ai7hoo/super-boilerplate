const responseTime = require('koa-response-time')

module.exports = (server) => {

    /* 处理时间 */
    server.app.use(responseTime())

    /* Gzip */
    server.app.use(require('koa-compress')())
    const convert = require('koa-convert')
    const minifyHtml = require('koa-html-minifier')({
        collapseWhitespace: true
    })
    server.app.use(convert(minifyHtml))
}