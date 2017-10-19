const path = require('path')
const appRunPath = process.cwd()
module.exports = {

    // 
    domain: require('../../apps/doc/config/site').domain,
    server: process.env.NOT_WEBPACK ? require('../../apps/doc/server') : '', // TODO: 用一个工具解决这个问题

    //
    webpack: {
        client: [{
            entry: {
                'critical-extra-old-ie': [
                    'babel-polyfill',
                    path.resolve(appRunPath, './apps/doc/client/critical.extra-old-ie.js')
                ],
                critical: [
                    path.resolve(appRunPath, './apps/doc/client/critical.js')
                ],
                client: [
                    path.resolve(appRunPath, './apps/doc/client/index.js')
                    // '../../apps/doc/client/index.spa.js'
                ]
            },
            output: {
                filename: `[name].[chunkhash].js`,
                chunkFilename: `chunk.[name].[chunkhash].js`,
                path: path.resolve(appRunPath, `dist/public/doc/`),
                publicPath: '/doc/'
            },
            module: {
                rules: [{
                    test: /\.md$/,
                    include: [
                        path.resolve(appRunPath, './apps/doc/docs')
                    ],
                    loader: 'raw-loader'
                }]
            },
            resolve: {
                alias: {
                    // 目录别名，不用的项目可以删除
                    '@apps': path.resolve(appRunPath, './apps'),

                    '@doc': path.resolve(appRunPath, './apps/doc'),
                    '@docConfig': path.resolve(appRunPath, './apps/doc/config'),
                    '@docLocales': path.resolve(appRunPath, './apps/doc/locales'),
                    '@docUtils': path.resolve(appRunPath, './apps/doc/utils'),
                    '@docAssets': path.resolve(appRunPath, './apps/doc/client/assets'),
                    '@docUI': path.resolve(appRunPath, './apps/doc/client/ui'),
                    '@docLogic': path.resolve(appRunPath, './apps/doc/client/logic'),
                    '@docDocs': path.resolve(appRunPath, './apps/doc/docs')
                }
            },
            configPlugins: {
                uglify: false, // true | false | {}
                createServiceWorker: false,
                createHtml: false,
                noErrors: false
            }
        }, {
            spa: true,
            htmlPath: '../index.html',
            entry: {
                'critical-extra-old-ie': [
                    'babel-polyfill',
                    path.resolve(appRunPath, './apps/doc/client/critical.extra-old-ie.js')
                ],
                critical: [
                    path.resolve(appRunPath, './apps/doc/client/critical.js')
                ],
                client: [
                    path.resolve(appRunPath, './apps/doc/client/index.spa.js')
                ]
            },
            output: {
                filename: `[name].[chunkhash].js`,
                chunkFilename: `chunk.[name].[chunkhash].js`,
                path: path.resolve(appRunPath, `dist-spa/doc/includes/`),
                publicPath: './includes/'
            },
            module: {
                rules: [{
                    test: /\.md$/,
                    include: [
                        path.resolve(appRunPath, './apps/doc/docs')
                    ],
                    loader: 'raw-loader'
                }]
            },
            resolve: {
                alias: {
                    // 目录别名，不用的项目可以删除
                    '@apps': path.resolve(appRunPath, './apps'),

                    '@doc': path.resolve(appRunPath, './apps/doc'),
                    '@docConfig': path.resolve(appRunPath, './apps/doc/config'),
                    '@docLocales': path.resolve(appRunPath, './apps/doc/locales'),
                    '@docUtils': path.resolve(appRunPath, './apps/doc/utils'),
                    '@docAssets': path.resolve(appRunPath, './apps/doc/client/assets'),
                    '@docUI': path.resolve(appRunPath, './apps/doc/client/ui'),
                    '@docLogic': path.resolve(appRunPath, './apps/doc/client/logic'),
                    '@docDocs': path.resolve(appRunPath, './apps/doc/docs')
                }
            }
        }]
    }
}