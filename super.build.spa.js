const path = require('path')
const base = require('./super.build')

module.exports = Object.assign({}, base, {
    dist: path.resolve('./dist-spa/'),
    inject: require('./src/spa/inject'),
})
