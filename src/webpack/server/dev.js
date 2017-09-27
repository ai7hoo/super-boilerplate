const path = require('path')
const webpack = require('webpack')
const common = require('../common')

module.exports = (appPath, clientDevPort) => ({
    target: 'async-node',
    node: {
        __dirname: true
    },
    watch: true,
    entry: [
        'webpack/hot/poll?1000',
        path.resolve(appPath, './src/start')
    ],
    output: {
        filename: 'index.js',
        chunkFilename: 'chunk.[name].js',
        path: appPath + '/dist/server',
        publicPath: `http://localhost:${clientDevPort}/dist/`
    },
    module: {
        rules: [...common.rules]
    },
    plugins: [
        new webpack.DefinePlugin({
            '__CLIENT__': false,
            '__SERVER__': true,
            '__DEV__': true,
            '__SPA__': false
        }),
        new webpack.HotModuleReplacementPlugin({ quiet: true }),
        ...common.plugins
    ],
    externals: common.filterExternalsModules(),
    resolve: common.resolve
})