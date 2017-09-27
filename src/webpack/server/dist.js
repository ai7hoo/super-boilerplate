const path = require('path')
const webpack = require('webpack')
const common = require('../common')

const getConfig = (appPath, type) => {
    // const publicPath = '/client'
    const typeName = type ? type : 'default'
    const publicPath = `/${typeName}`

    return {
        target: 'async-node',
        node: {
            __dirname: true
        },
        watch: false,
        entry: [
            path.resolve(appPath, './src/start')
        ],
        output: {
            filename: 'index.js',
            chunkFilename: 'chunk.[name].[chunkhash].js',
            path: appPath + '/dist/server',
            publicPath: publicPath + '/'
        },
        module: {
            rules: [...common.rules]
        },
        plugins: [
            new webpack.DefinePlugin({
                '__CLIENT__': false,
                '__SERVER__': true,
                '__DEV__': false,
                '__SPA__': false
            }),
            ...common.plugins
        ],
        externals: common.filterExternalsModules(),
        resolve: common.resolve
    }
}

module.exports = (appPath) => [
    getConfig(appPath, 'app')
]