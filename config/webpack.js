const path = require('path')
const appPath = process.cwd()
const docsPath = path.resolve(appPath, './apps/app/docs')

// webpack 基础配置
const config = {

    // webpack dev server 启动端口
    WEBPACK_DEV_SERVER_PORT: process.env.WEBPACK_DEV_SERVER_PORT || '3001',

    // webpack 打包场景  dev|dist
    WEBPACK_BUILD_ENV: process.env.WEBPACK_BUILD_ENV || 'dist',

    // webpack 打包应用  client|server
    WEBPACK_STAGE_MODE: process.env.WEBPACK_STAGE_MODE || 'client',

    // 自定义app打包名字
    APP_1_ENTER_JS_NAME: 'app',

    // 需要 bable 处理的模块
    needBabelHandleList:[]
}

// 重写或配置客户端入口文件
config.clientEntries = (appPath, type) => {

    const isSPA = process.env.WEBPACK_BUILD_ENV === 'spa'

    switch (type) {
        case 'app': {
            return {
                "critical-extra-old-ie": [
                    "babel-polyfill",
                    path.resolve(appPath, `./apps/${type}/client/critical.extra-old-ie.js`)
                ],
                critical: [
                    path.resolve(appPath, `./apps/${type}/client/critical`)
                ],
                client: [
                    isSPA
                        ? path.resolve(appPath, `./apps/${type}/client/index.spa.js`)
                        : path.resolve(appPath, `./apps/${type}/client`)
                ]
            }
        }

        default: {
            let entryFiles = {}
            entryFiles[config.APP_1_ENTER_JS_NAME] = [path.resolve(appPath, './apps/react/client')]
            return entryFiles
        }

    }
}

// 重写或配置服务端入口文件
config.serverEntries = (appPath) => [
    path.resolve(appPath, './start')
]

// 重写或配置昵称文件
config.resolve = {
    modules: [
        'node_modules'
        // path.resolve(appPath, './src/modules')
    ],
    alias: {
        Apps: path.resolve(appPath, './apps'),

        "@app": path.resolve(appPath, './apps/app'),
        "@appConfig": path.resolve(appPath, './apps/app/client/config'),
        "@appLocales": path.resolve(appPath, './apps/app/locales'),
        "@appUtils": path.resolve(appPath, './apps/app/utils'),
        "@appAssets": path.resolve(appPath, './apps/app/client/assets'),
        "@appUI": path.resolve(appPath, './apps/app/client/ui'),
        "@appLogic": path.resolve(appPath, './apps/app/client/logic'),
        "@appDocs": docsPath
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.less', '.sass', '.scss']
}

// 扩展 webpack 的 rules
config.rulesExt = [{
    test: /\.md$/,
    include: [
        docsPath
    ],
    loader: 'raw-loader'
}]

module.exports = config