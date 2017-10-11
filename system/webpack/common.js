const fs = require('fs')
// const webpack = require('webpack')
const path = require('path')
const config = require('../../config/webpack')
// const appPath = process.cwd()

// const pathDocs = path.resolve(appPath, "./docs")
// const pathDocs = path.resolve(appPath, "./apps/app/docs")

const useSpCssLoader = 'sp-css-loader?length=8&mode=replace'

// 客户端入库文件
const clientEntries = config.clientEntries || ((appPath, type) => {

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
})

// 服务端入库文件
const serverEntries = config.serverEntries || ((appPath) => [
    path.resolve(appPath, './start')
])

// 执行顺序，从右到左
const rules = (()=>{
    let rules = config.rules || [
        {
            test: /\.json$/,
            loader: 'json-loader'
        },
    
        // CSS - general
        {
            test: /\.css$/,
            exclude: [/\.g\.css$/, /node_modules/],
            use: [
                useSpCssLoader,
                "postcss-loader",
            ]
        }, {
            test: /\.less$/,
            exclude: [/\.g\.less$/, /node_modules/],
            use: [
                useSpCssLoader,
                "postcss-loader",
                "less-loader",
            ]
        }, {
            test: /\.scss$/,
            exclude: [/\.g\.scss$/, /node_modules/],
            use: [
                useSpCssLoader,
                "postcss-loader",
                "sass-loader",
            ]
        },
        
        // CSS - in node_modules
        {
            test: /\.css$/,
            include: /node_modules/,
            use: [
                "style-loader",
                "postcss-loader"
            ]
        }, {
            test: /\.less$/,
            include: /node_modules/,
            use: [
                "style-loader",
                "postcss-loader",
                "less-loader"
            ]
        }, {
            test: /\.scss$/,
            include: /node_modules/,
            use: [
                "style-loader",
                "postcss-loader",
                "sass-loader"
            ]
        },
        
        // CSS - other global
        {
            test: /\.g\.css$/,
            use: [
                "style-loader",
                "postcss-loader"
            ]
        }, {
            test: /\.g\.less$/,
            use: [
                "style-loader",
                "postcss-loader",
                "less-loader"
            ]
        }, {
            test: /\.g\.scss$/,
            use: [
                "style-loader",
                "postcss-loader",
                "sass-loader"
            ]
        },
        
        // commons
        {
            test: /\.(ico|gif|jpg|jpeg|png|svg|webp)$/,
            loader: 'file-loader?context=static&name=assets/[hash:32].[ext]',
            exclude: /node_modules/
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader'
        }
    ]

    if(config.rulesExt) 
        rules = rules.concat(config.rulesExt)
    return rules
})()


// 执行顺序，？
const plugins = config.plugins || [
]

const resolve = config.resolve || {
    modules: [
        'node_modules'
        // path.resolve(appPath, './src/modules')
    ],
    alias: {
        // Apps: path.resolve(appPath, './apps'),

        // "@app": path.resolve(appPath, './apps/app'),
        // "@appConfig": path.resolve(appPath, './apps/app/client/config'),
        // "@appLocales": path.resolve(appPath, './apps/app/locales'),
        // "@appUtils": path.resolve(appPath, './apps/app/utils'),
        // "@appAssets": path.resolve(appPath, './apps/app/client/assets'),
        // "@appUI": path.resolve(appPath, './apps/app/client/ui'),
        // "@appLogic": path.resolve(appPath, './apps/app/client/logic'),
        // "@appDocs": pathDocs
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.less', '.sass', '.scss']
}


// 这里配置需要babel处理的node_modules
// 大部分是自己用es6语法写的模块
const needBabelHandleList = config.needBabelHandleList.concat([
    'super-project',
    'sp-base',
    'sp-boilerplate',
    'sp-css-import',
    'sp-css-loader',
    'sp-mongo',
    'sp-api',
    'sp-cors-middleware',
    'sp-react-isomorphic',
    'sp-model',
    'sp-cms',
    'sp-auth',
    'sp-koa-views',
    'sp-response',
    'sp-upload',
    'sp-i18n'
])

// https://github.com/webpack/webpack/issues/2852
// webpack 在打包服务端依赖 node_modules 的时候易出错，
// 所以把 package.json 里描述的依赖过滤掉，只打包自己写的代码
// 注：在上线的时候需要需要自行安装 package.json 的依赖包
const filterExternalsModules = () => fs
    .readdirSync(path.resolve(__dirname, '../../', 'node_modules'))
    .concat(['react-dom/server'])
    .filter((x) => ['.bin'].concat(needBabelHandleList).indexOf(x) === -1)
    .filter((x) => !/^sp-/.test(x))
    .reduce((ext, mod) => {
        ext[mod] = ['commonjs', mod].join(' ') // eslint-disable-line no-param-reassign
        return ext
    }, {})

// 已下属都可以在 /config/webpack.js 中扩展
module.exports = {
    clientEntries,
    serverEntries,
    rules,
    plugins,
    resolve,
    needBabelHandleList,
    filterExternalsModules
}