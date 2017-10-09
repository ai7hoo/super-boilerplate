/* 挂载子 app */

const serverConfig = require('./server')

module.exports = (server) => {

    // eg:
    // server.addSubApp([域名], [app入口])

    server.addSubApp(serverConfig.DEFAULT_DOMAIN, require('../apps/app/server').default)
    server.addSubApp('api', require('../apps/api').default)
}