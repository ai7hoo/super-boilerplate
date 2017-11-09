const DEV_CONFIG = require('./dev')
const ONLINE_CONFIG = require('./online')

const config = __DEV__ ? DEV_CONFIG : Object.assign(DEV_CONFIG, ONLINE_CONFIG)

module.exports = config