const path = require('path')

const webpack = require('webpack')
const common = require('./common')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const pwaCreatePlugin = require('sp-pwa')

const getConfig = (appPath, type) => {
    const entries = require('./client-entries.js')(appPath, type)
    const outputPath = path.resolve(appPath, `dist/public/client${type ? ('/' + type) : ''}`)
    const publicPath = `/client${type ? ('/' + type) : ''}/`

    return {
        target: 'web',
        devtool: 'source-map',
        entry: entries,
        output: {
            filename: '[name].[chunkhash].js',
            chunkFilename: 'chunk.[name].[chunkhash].js',
            path: outputPath,
            publicPath: publicPath // TODO 改成静态第三方URL用于CDN部署 http://localhost:3000/
        },
        module: {
            rules: [...common.rules]
        },
        plugins: [
            // 在node执行环境中设置，不起作用，此处不能省略
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.DefinePlugin({
                '__CLIENT__': true,
                '__SERVER__': false,
                '__DEV__': false
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            ...common.plugins,
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                beautify: false,
                comments: false,
                sourceMap: true
            }),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(appPath, './src/client/assets/favicon-32.ico'),
                    to: '../favicon.ico'
                }
            ]),

            // 打包入 PWA 支持
            // 采用默认 Service Worker 文件
            pwaCreatePlugin({
                outputPath,
                globOptions: {
                    ignore: [
                        '/**/admin/',
                        '/**/admin/**/*'
                    ]
                }
            })

            // 自指定 Service Worker 文件
            // pwaCreatePlugin(outputPath, path.normalize(appPath + '/src/client/custom-service-worker.js'))
        ],
        resolve: common.resolve
        // externals: ['react'] // 尝试把react单独已js引用到html中，看看是否可以减小体积
    }
}

module.exports = (appPath) => [
    getConfig(appPath),
    getConfig(appPath, 'admin')
]