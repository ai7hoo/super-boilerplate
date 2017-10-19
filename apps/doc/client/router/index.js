import App from '@docUI/App.jsx'

import development from './development'
import components from './components'
import modules from './modules'

// 检查当前URL与路由配置路径是否相匹配，如果否，则不予渲染组件
// 通常在网络连接情况较差的情况下，容易出现不匹配的情况
import _routeCheck from 'sp-isomorphic-utils/route-check'
export const routeCheck = (nextState) => _routeCheck(nextState, __SERVER__ || __SPA__)

export default {
    path: __SPA__ ? '/' : '',
    component: App,
    name: 'page-app',

    indexRoute: {
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('@docUI/pages/Doc').default)
            }, 'home')
        }
    },

    childRoutes: [
        development,
        components,
        modules,

        {
            path: 'about',
            name: 'about',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    if (routeCheck(nextState)) cb(null, require('@docUI/pages/About').default)
                }, 'about')
            }
        }
    ]
}