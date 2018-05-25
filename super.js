/**
 * 有关项目启动的相关配置
 * 本文件的代码会被 webpack 打包
 * 
 * 可以加载 ES6 module
 * 可以使用构建配置中 defines (webpack.definePlugin) 中定义的变量
 */

// String，项目标识名
export const name = '豹小秘管理后台'

// String，项目类型
// 无默认值，必须指定
// 目前支持 'react'
// 计划支持 'react-config' 'vue'
export const type = 'react-spa'

// String，HTML基础模板
// 无默认值，必须指定
// 同构模式、客户端环境：忽略
// export const template = require('./src/app/template.ejs')

// Object，路由配置
// 无默认值
// 同构模式：必须指定
export const router = require('./src/app/router').default

// Object，Redux配置
// 无默认值
// 同构模式：必须指定
export const redux = {
    // 附加 reducer，与 combineReducers 参数语法相同
    combineReducers: require('./src/app/redux/reducers').default
}

// Function || Object，客户端启动代码或配置
// 可不指定
// export const client = require('/src/app1/client'), // 替代默认的客户端启动流程
export const client = { // 扩展默认的启动流程
    // String，路由历史类型，支持 'browser' 'hash' 'memory'，同构时默认为 'browser'，其他情况默认为 'hash'
    history: 'browser',
    // Function，在启动前的回调
    before: require('./src/app/lifecycle/before').default,
    // Function，在启动后的回调
    after: require('./src/app/lifecycle/after').default,
    // Function，在路由发生改变时的回调
    onRouterUpdate: require('./src/app/lifecycle/on-router-update').default,
    // Function，在浏览器历史发生改变时的回调
    onHistoryUpdate: require('./src/app/lifecycle/on-history-update').default,
}
