/* 挂载子app */

module.exports = (server) => {
    server.addSubApp('localhost', require('../apps/doc/server').default)
}