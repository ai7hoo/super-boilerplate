// 此文件可或者 koa 中间件，所有 app 都会用到
// 扩展时候需考虑普适性

module.exports = (server) => {


    // const responseTime = require('koa-response-time')

    /* 处理时间 */
    // server.app.use(responseTime())

    /* Gzip */
    // server.app.use(require('koa-compress')())
    // const convert = require('koa-convert')
    // const minifyHtml = require('koa-html-minifier')({
    //     collapseWhitespace: true
    // })
    // server.app.use(convert(minifyHtml))
}