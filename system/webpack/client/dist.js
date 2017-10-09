const path = require('path')
// const fs = require('fs-extra')

const webpack = require('webpack')
const common = require('../common')

// const CopyWebpackPlugin = require('copy-webpack-plugin')
const pwaCreatePlugin = require('sp-pwa')

const defaults = {
    pwa: false
}

const getConfig = (appPath, type, options = {}) => {

    const settings = Object.assign({}, defaults, options)
    // const entries = require('./_entries.js')(appPath, type)
    const entries = common.clientEntries(appPath, type)
    const typeName = type ? type : 'default'
    const outputPath = path.resolve(appPath, `dist/public/${typeName}/`)
    const publicPath = `/${typeName}/`

    /*if (type === 'portals') {
        fs.writeFileSync(
            path.resolve(appPath, './src/server/app-plus/views/plus-index.ejs'),
            fs.readFileSync(path.resolve(appPath, './src/server/app-plus/views/src/template.ejs'), 'utf-8')
                .replace(/\<\%\= publicPath \%\>/g, publicPath),
            'utf-8'
        )
    }*/

    let config = {
        target: 'web',
        devtool: 'source-map',
        entry: entries,
        output: {
            filename: `[name].[chunkhash].js`,
            chunkFilename: `chunk.[name].[chunkhash].js`,
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
                '__DEV__': false,
                '__SPA__': false
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            ...common.plugins,
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                beautify: false,
                comments: false,
                sourceMap: false
            }),
            settings.pwa ? pwaCreatePlugin({
                outputPath: path.resolve(outputPath, '../'),
                outputFilename: `service-worker.${typeName}.js`,
                // customServiceWorkerPath: path.normalize(appPath + '/src/client/custom-service-worker.js'),
                globPattern: `/${typeName}/**/*`,
                // globOptions: {
                //     ignore: [
                //         '/**/portals/',
                //         '/**/portals/**/*'
                //     ]
                // }
            }) : undefined
        ],
        resolve: common.resolve
        // externals: ['react'] // 尝试把react单独已js引用到html中，看看是否可以减小体积
    }

    return config
}

module.exports = (appPath) => [
    getConfig(appPath, 'app', {
        pwa: true
    }),
    // getConfig(appPath, 'api')
]