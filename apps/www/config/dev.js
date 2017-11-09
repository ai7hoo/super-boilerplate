const SYSTEM_RUN_PATH = process.cwd()

module.exports = {

    // 静态路径
    staticPath: `${SYSTEM_RUN_PATH}/apps/website/public`,

    // 静态模板路径
    viewsPath: `${SYSTEM_RUN_PATH}/apps/website/views`,

    // 数据库
    mysql: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        // password: 'root',
        database: 'ads_db'
    }
}