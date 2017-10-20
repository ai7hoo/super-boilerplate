const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const appRunPath = process.cwd()

// 打包结果目录
const outputPath = /* config.outputPath ||  */ (() => {
    if (process.env.WEBPACK_BUILD_ENV === 'spa')
        return 'dist-spa'
    return 'dist'
})()

// 服务端入库文件
const serverEntries = /* config.serverEntries ||  */ ((appPath) => [
    path.resolve(appPath, 'system/start')
])

// 执行顺序，从右到左
const useSpCssLoader = 'sp-css-loader?length=8&mode=replace'
const rules = (() => {
    let rules = [
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

    return rules
})()


// 执行顺序
// const plugins = []
const plugins = (env, stage, spa = false) => {
    return [
        new webpack.DefinePlugin({
            '__CLIENT__': stage == 'client',
            '__SERVER__': stage == 'server',
            '__DEV__': env == 'dev',
            '__SPA__': !!spa
        })
    ]
}

// function plugins(env, stage) {
//     return [
//         new webpack.DefinePlugin({
//             '__CLIENT__': stage == 'client',
//             '__SERVER__': stage == 'server',
//             '__DEV__': env == 'dev',
//             // '__SPA__': false
//         })
//     ]
// }

const resolve = Object.assign({
    modules: [
        'node_modules'
    ],
    alias: {
        // Apps: path.resolve(appPath, './apps'),
        // "@app": path.resolve(appPath, './apps/app')
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.less', '.sass', '.scss']
})


// 这里配置需要babel处理的node_modules
// 大部分是自己用es6语法写的模块
const needBabelHandleList = [
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
]

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
    outputPath,
    serverEntries,
    rules,
    plugins,
    resolve,
    needBabelHandleList,
    filterExternalsModules
}