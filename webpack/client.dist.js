const path = require('path')

const webpack = require('webpack')
const common = require('./common')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackOnBuildPlugin = require('on-build-webpack')
const md5File = require('md5-file')
const glob = require('glob')

module.exports = (appPath) => {
    const entries = require('./client-entries.js')(appPath)
    const outputPath = path.normalize(appPath + '/dist/public/client')
    const files = {
        favicon: path.resolve(appPath, './src/client/assets/favicon-32.ico'),
        pwa: path.resolve(appPath, './src/client/pwa.js')
    }

    return {
        target: 'web',
        devtool: 'source-map',
        entry: entries,
        output: {
            filename: '[name].[chunkhash].js',
            chunkFilename: 'chunk.[name].[chunkhash].js',
            path: outputPath,
            publicPath: '/client/' // TODO 改成静态第三方URL用于CDN部署 http://localhost:3000/
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
                    from: files.favicon,
                    to: '../favicon.ico'
                },
                {
                    from: files.pwa,
                    // to: `pwa.${md5File.sync(files.pwa)}.js`
                    to: 'pwa.js'
                }
            ]),
            new WebpackOnBuildPlugin(function (stats) {
                // After webpack build...
                // get all files in outputPath
                var fs = require('fs')
                var getDirectories = function (src, callback) {
                    glob(src + '/**/*', callback);
                };
                var files = ['/']
                var filePWA = path.resolve(outputPath, 'pwa.js')
                getDirectories(outputPath, function (err, res) {
                    if (err) {
                        console.log('Error', err);
                    } else {
                        res.forEach(function (file) {
                            if (fs.lstatSync(file).isDirectory()) return
                            if (path.extname(file) === '.map') return
                            if (path.basename(file) === 'pwa.js') return
                            file = path.normalize(file).replace(outputPath, '').split(path.sep).join('/')
                            files.push('/client' + file)
                        })
                    }
                    fs.readFile(filePWA, 'utf8', function (err, data) {
                        if (err) return console.log(err);
                        var result = data.replace(
                            /const urlsToCache = \[\]/g,
                            'const urlsToCache = ' + JSON.stringify(files)
                        );

                        fs.writeFile(filePWA, result, 'utf8', function (err) {
                            if (err) return console.log(err);
                            var newPWA = `pwa.${md5File.sync(filePWA)}.js`
                            fs.rename(filePWA, path.resolve(outputPath, '../' + newPWA), function (err) {
                                if (err) return console.log(err);
                                console.log('pwa.js renamed to ' + newPWA)
                            })
                        });
                    });
                });
            })
        ],
        resolve: common.resolve
        // externals: ['react'] // 尝试把react单独已js引用到html中，看看是否可以减小体积
    }
}
