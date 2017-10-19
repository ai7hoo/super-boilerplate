const webpack = require('webpack')
const common = require('../common')

const factoryConfig = async(opt) => {

    let { RUN_PATH, CLIENT_DEV_PORT, APP_KEY } = opt

    // 此处引用 Webpack dev server 的文件，动态打包更新
    const publicPath = `http://localhost:${CLIENT_DEV_PORT}/dist`

    return {
        target: 'async-node',
        node: {
            __dirname: true
        },
        watch: true,
        entry: common.serverEntries(RUN_PATH).concat([
            'webpack/hot/poll?1000'
        ]),
        output: {
            filename: 'index.js',
            chunkFilename: 'chunk.[name].js',
            path: `${RUN_PATH}/${common.outputPath}/server`,
            publicPath: `${publicPath}/`
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
    }
}

module.exports = async(opt) => await factoryConfig(opt)