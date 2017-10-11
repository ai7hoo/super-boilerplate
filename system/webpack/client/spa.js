const path = require('path')
const fs = require('fs-extra')

const webpack = require('webpack')
const common = require('../common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackOnBuildPlugin = require('on-build-webpack')

const times = n => f => {
    let iter = i => {
        if (i === n) return
        f(i)
        iter(i + 1)
    }
    return iter(0)
}

const getConfig = (appPath, type) => {

    // const entries = require('./_entries.js')(appPath, type)
    const entries = common.clientEntries(appPath, type)
    const typeName = type ? type : 'default'
    const outputPath = path.resolve(appPath, `dist-spa/${typeName}/includes`)
    const publicPath = `includes/`
    const htmlFileName = '../index.html'

    let config = {
        target: 'web',
        devtool: 'source-map',
        entry: entries,
        output: {
            filename: `[name].[chunkhash].js`,
            chunkFilename: `chunk.[name].[chunkhash].js`,
            path: outputPath,
            publicPath: publicPath
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
                '__SPA__': true
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            ...common.plugins,
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         warnings: false
            //     },
            //     beautify: false,
            //     comments: false,
            //     sourceMap: false
            // }),
            // pwaCreatePlugin({
            //     outputPath: path.resolve(outputPath, '../'),
            //     outputFilename: `service-worker.${typeName}.js`,
            //     // customServiceWorkerPath: path.normalize(appPath + '/src/client/custom-service-worker.js'),
            //     globPattern: `/${typeName}/**/*`,
            //     // globOptions: {
            //     //     ignore: [
            //     //     ]
            //     // }
            // })
            new HtmlWebpackPlugin({
                title: 'Super Project',
                filename: htmlFileName,
                template: path.resolve(appPath, `./apps/app/html.ejs`),
                inject: false
            }),
            new WebpackOnBuildPlugin(function (stats) {
                // After webpack build...
                // create(parseOptions(...args))
                // console.log('')
                // console.log('----------------------------------------')
                // console.log('')

                const chunks = {}
                const outputPath = stats.compilation.outputOptions.path
                const publicPath = stats.compilation.outputOptions.publicPath

                const log = (obj, spaceCount = 1, deep = 2) => {
                    if (typeof obj === 'object') {
                        let spaces = ''
                        times(spaceCount)(() => {
                            spaces += '    '
                        })
                        for (let key in obj) {
                            console.log(spaces + key)
                            if (spaceCount < deep)
                                log(obj[key], spaceCount + 1, deep)
                        }
                    }
                }

                // log(stats)

                // for (let key in stats) {
                //     console.log(key)
                //     obj[key] = stats[key]
                // }
                // console.log(stats.compilation.namedChunks)

                // log(stats.compilation.chunks, undefined, 2)

                for (let id in stats.compilation.chunks) {
                    const o = stats.compilation.chunks[id]
                    chunks[o.name] = o.files
                    // console.log(
                    //     o.id,
                    //     // o.ids,
                    //     o.name,
                    //     // o.chunks,
                    //     o.files
                    //     // o.hash,
                    //     // o.renderedHash
                    // )
                }

                // console.log(chunks)
                // console.log(outputPath,htmlFileName)

                fs.writeFileSync(
                    path.resolve(outputPath, htmlFileName),
                    fs.readFileSync(
                        path.resolve(outputPath, htmlFileName),
                        'utf-8'
                    ).replace(/\{\{[ ]*SRC:(.+?)[ ]*\}\}/g, (match, ...parts) => {
                        // console.log(match, parts)
                        return publicPath + chunks[parts[0]][0]
                    }),
                    'utf-8'
                )

                // id
                // ids
                // debugId
                // name
                // _modules
                // entrypoints
                // chunks
                // parents
                // blocks
                // origins
                // files
                // rendered
                // entryModule
                // hash
                // renderedHash

                // console.log('')
                // console.log('----------------------------------------')
                // console.log('')

            })
        ],
        resolve: common.resolve
        // externals: ['react'] // 尝试把react单独已js引用到html中，看看是否可以减小体积
    }

    return config
}

module.exports = (appPath) => [
    getConfig(appPath, 'app')
]