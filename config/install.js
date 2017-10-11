/* 挂载子 app */

module.exports = (server) => {

    // eg:
    // server.addSubApp([域名], [app入口])

    server.addSubApp(require('@app/config/site').domain, require('@app/server').default)
    server.addSubApp('api', require('../apps/api').default)
}