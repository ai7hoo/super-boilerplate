// String，项目标识名
export const name = 'biture'

// String，项目类型
// 无默认值，必须指定
// 目前支持 'react'
// 计划支持 'react-config' 'vue'
export const type = 'react'


// String，HTML基础模板
// 无默认值，必须指定
// 同构模式&&客户端环境：忽略
export const template = (__SERVER__ || __SPA__)
    ? require('./src/html').default
    : ''

// Object，路由配置
// 无默认值
// 同构模式：必须指定
export const router = require('./src/client/router').default

// Object，Redux配置
// 无默认值
// 同构模式：必须指定
export const redux = {
    // 附加 reducer，与 combineReducers 参数语法相同
    combineReducers: require('./src/client/redux/reducers').default
}

// Function || Object，客户端启动代码或配置
// 可不指定
export const client = { // 扩展默认的启动流程

    // Object，路由配置
    // 无默认值
    // 同构模式：必须指定
    router: require('./src/client/router').default,

    // Object，Redux配置
    // 无默认值
    // 同构模式：必须指定
    redux: {
        // 附加 reducer，与 combineReducers 参数语法相同
        combineReducers: require('./src/client/redux/reducers').default
    },

    // String，路由历史类型，支持 'browser' 'hash' 'memory'，同构时默认为 'browser'，其他情况默认为 'hash'
    history: 'browser',
    // Function，在启动前的回调
    // before: require('./src/client/lifecycle/before-run').default,
    // Function，在启动后的回调
    // after: require('./src/client/lifecycle/after-run').default,
    // Function，在路由发生改变时的回调
    // routerUpdate: require('./src/client/lifecycle/on-router-update').default,
    // Function，在浏览器历史发生改变时的回调
    // historyUpdate: require('./src/client/lifecycle/on-history-update').default,
}

// Function || Object，服务器端启动代码或配置
// 可不指定
// 非同构模式：忽略
// 客户端环境：忽略
export const server = __SERVER__ ? { // 扩展默认的启动流程
    // Array，Cookie键值
    cookieKeys: ['super-project-key'],
    // Object，注入内容
    inject: require('./src/server/lifecycle/inject').default,
    // Function，在启动前的回调
    before: require('./src/server/lifecycle/before').default,
    // Function，在启动后的回调
    after: require('./src/server/lifecycle/after').default,
    // Function，在渲染时的回调
    render: require('./src/server/lifecycle/render').default,
} : {}



// Extra
//----------------------------------------------------------------

// Array，多语言配置
// 无默认值
// i18n 为 true 时必须指定，否则会忽略
// 第一个语言为默认语言
export const i18n = true
export const locales = (__SERVER__ || __SPA__)
    ? [
        // ['en', require(`./locales/en.json`)],
        // ['zh', require(`./locales/zh.json`)],
    ] : []

// Object，PWA相关配置，参见下文
// export const pwa = false