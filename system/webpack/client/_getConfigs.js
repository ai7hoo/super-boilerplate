const Config = require('webpack-config').default
const customConfig = require('../../../config/webpack')

const parse = async (app, getConfig, appPath, defaults = {}) => {
    // getConfig(appPath, app, defaults)

    if (Array.isArray(app))
        return app.map(await parse)

    if (typeof app === 'object') {
        const {
            app: appName,
            [`${process.env.WEBPACK_STAGE_MODE}-${process.env.WEBPACK_BUILD_ENV}`]: currentConfig,
            ...options
        } = app
        return new Config()
            .merge(await getConfig(appPath, appName, Object.assign({}, defaults, options)))
            .merge(currentConfig || {})
        // return await getConfig(appPath, appName, Object.assign({}, defaults, config))
    }

    return await getConfig(appPath, app, defaults)
}

module.exports = async (...args) => await parse(
    customConfig.clientApps || ['app'],
    ...args
)