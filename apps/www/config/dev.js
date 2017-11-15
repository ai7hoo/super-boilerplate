const SYSTEM_RUN_PATH = process.cwd()
const APP_KEY = 'www'

module.exports = {

    appKey: APP_KEY,

    // 静态路径
    staticPath: `${SYSTEM_RUN_PATH}/apps/${APP_KEY}/public`,

    // 上传文件路径
    uploadPath: `${SYSTEM_RUN_PATH}/apps/${APP_KEY}/public/upload`,

    // 静态模板路径
    viewsPath: `${SYSTEM_RUN_PATH}/apps/${APP_KEY}/views`,

    // 数据库
    mysql: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        // password: 'root',
        database: 'ads_db'
    }
}