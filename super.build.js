/**
 * 项目构建/打包配置
 * 该文件会在 webpack 打包前载入
 * 
 * 无法加载 ES6 module
 * 无法使用 webpack.definePlugin 中定义的变量
 */

const path = require('path')
const fs = require('fs-extra')

module.exports = {
    /**
     * {string} 打包目标目录
     * 默认会在该目录下建立 public 和 server 目录，分别对应 web 服务器和服务器执行代码
     * 注：如果为相对路径，请确保第一个字符为 .
     */
    dist: './dist/',

    /**
     * {object|function} Webpack 配置对象或生成方法，可为异步方法
     */
    config: async () => {
        const ENV = process.env.WEBPACK_BUILD_ENV
        if (ENV === 'dev') return require('./src/webpack/dev')
        if (ENV === 'prod') return require('./src/webpack/prod')
        return {}
    },

    /**
     * {object} 目录或文件别名
     * 在项目内的 Javascript 和 CSS/Less/Sass 中的引用方法均可直接使用这些别名，如
     * Javascript: require('@app/create.js')
     * LESS: @import "@app/base.less"
     * 
     * 建议使用绝对路径
     */
    aliases: {
        '@src': path.resolve('./src'),
        '@app': path.resolve('./src/app'),
        '@ui': path.resolve('./src/app/ui'),
        '@api': path.resolve('./src/app/api'),
        '@assets': path.resolve('./src/app/assets'),
        '@redux': path.resolve('./src/app/redux'),

        "~base.less": path.resolve('./src/app/ui/base.less'),
        "~Assets": path.resolve('./src/app/assets'),
        "~/": path.resolve('./src/app/ui')
    },

    /**
     * {number|string|Object} 服务器运行端口
     */
    // port: 3080,
    // port: {
    //     dev: 3000,
    //     prod: 8080,
    // },

    /**
     * {Boolean|Array[]|Object} 多语言配置
     */
    // i18n: false,
    i18n: [
        ['zh', './src/app/locales/zh.json'],
        ['en', './src/app/locales/en.json'],
    ],
    // i18n: {
    //     type: 'redux',
    //     locales: [
    //         ['zh', './src/app/locales/zh.json'],
    //         ['en', './src/app/locales/en.json'],
    //     ]
    // },

    /**
     * {Object|boolean} PWA相关设置，仅在 ENV: prod 环境下生效
     */
    pwa: {
        // pathname: '/service-worker.js',
        // template: path.resolve('./src/sw-template.js'),
        // initialCache: '/**/*',
        // initialCacheAppend: [// real urls],
        initialCacheIgonre: [
            '/dev-*',
        ]
    },

    /**
     * {Object} STAGE: client && ENV: dev 环境下的 webpack dev server 配置
     */
    devServer: {},

    /**
     * {function} 在 Webpack 打包执行前运行的方法，可为异步
     */
    beforeBuild: async (args) => {
        if (process.env.WEBPACK_BUILD_STAGE === 'client') {
            await fs.remove(process.env.SUPER_DIST_DIR)
        }
        return
    },

    /**
     * {function} 在 Webpack 打包执行后运行的方法，可为异步
     */
    afterBuild: async () => {
        return
    },

    /**
     * {Object} 扩展 webpack.DefinePlugin 的内容
     */
    defines: {},

    // 强制指定模板文件地址
    template: './src/app/template.ejs',
}
