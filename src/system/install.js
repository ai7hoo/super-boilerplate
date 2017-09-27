/* 挂载子app */

const serverConfig = require('../config/server')

module.exports = (server) => {
    server.addSubApp(serverConfig.DEFAULT_DOMAIN, require('../apps/app/server').default)
    server.addSubApp('api', require('../apps/api').default)
}