module.exports = {

    // cookie serect key
    COOKIE_KEYS: ['super-project-key'],

    // 系统服务启动端口
    SERVER_PORT: process.env.SERVER_PORT || '3000',

    // webpack 服务端打包后文件路径
    WEBPACK_SERVER_OUTPATH: 'dist/server'
}