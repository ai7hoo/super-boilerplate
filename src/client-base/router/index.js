import App from 'UI/App.jsx'

// 检查当前URL与路由配置路径是否相匹配，如果否，则不予渲染组件
// 通常在网络连接情况较差的情况下，容易出现不匹配的情况
export const routeCheck = (nextState) => __SERVER__ ? true : (nextState.location.pathname === location.pathname)

export default {
    path: '',
    component: App,
    name: 'page-app',
    childRoutes: [        
        {
            path: 'home',
            name: 'home',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    if (routeCheck(nextState)) cb(null, require('UI/pages/Home').default)
                }, 'home')
            },
            isIndex: true
        },
        {
            path: 'about',
            name: 'about',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    if (routeCheck(nextState)) cb(null, require('UI/pages/About').default)
                }, 'about')
            }
        }
    ]
}