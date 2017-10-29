const path = require('path')
const appRunPath = process.cwd()
module.exports = {

    // 
    domain: require('../../apps/app/config/site').domain,
    server: global.NOT_WEBPACK_RUN ? require('../../apps/app/server').default : '',

    //
    webpack: {
        client: {
            // analyzer: true, // analyze webpack bundle stat

            entry: {
                'critical-extra-old-ie': [
                    'babel-polyfill',
                    path.resolve(appRunPath, './apps/app/client/critical.extra-old-ie.js')
                ],
                critical: [
                    path.resolve(appRunPath, './apps/app/client/critical.js')
                ],
                client: [
                    path.resolve(appRunPath, './apps/app/client/index.js')
                    // '../../apps/app/client/index.spa.js'
                ]
            },
            output: process.env.WEBPACK_BUILD_ENV !== 'dev' ? {
                filename: `[name].[chunkhash].js`,
                chunkFilename: `chunk.[name].[chunkhash].js`,
                path: path.resolve(appRunPath, `dist/public/app/`),
                publicPath: '/app/'
            } : undefined,
            module: {
                rules: ['default', {
                    test: /\.md$/,
                    include: [
                        path.resolve(appRunPath, './apps/app/docs')
                    ],
                    loader: 'raw-loader'
                }]
            },
            resolve: {
                alias: {
                    // 目录别名，不用的项目可以删除
                    '@apps': path.resolve(appRunPath, './apps'),

                    '@app': path.resolve(appRunPath, './apps/app'),
                    '@appConfig': path.resolve(appRunPath, './apps/app/config'),
                    '@appLocales': path.resolve(appRunPath, './apps/app/locales'),
                    '@appUtils': path.resolve(appRunPath, './apps/app/utils'),
                    '@appAssets': path.resolve(appRunPath, './apps/app/client/assets'),
                    '@appUI': path.resolve(appRunPath, './apps/app/client/ui'),
                    '@appLogic': path.resolve(appRunPath, './apps/app/client/logic'),
                    '@appDocs': path.resolve(appRunPath, './apps/app/docs')
                }
            }
        }
    }
}