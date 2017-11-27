const SYSTEM_RUN_PATH = process.cwd()
const APP_KEY = 'api'

module.exports = {

    appKey: APP_KEY,

    // 静态路径
    staticPath: `${SYSTEM_RUN_PATH}/apps/${APP_KEY}/public`,

    // 数据库
    mysql: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        // password: 'root',
        database: 'sp-boilerplate'
    },

    // 访问控制列表
    acl: {
        ANYONE: [
            //
            '/robots.txt|get',
            '/favicon.ico|get',
            //
            '/|get',
            '/login|*',
            '/register|*',
            '/forget|*'
        ],
        ADMIN: [
            '/admin|*',
            '/report|*',
            '/account/*|get'
        ]
    }
}