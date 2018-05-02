// 检查当前URL与路由配置路径是否相匹配，如果否，则不予渲染组件
// 通常在网络连接情况较差的情况下，容易出现不匹配的情况
import _routeCheck from 'sp-isomorphic-utils/route-check'


import Root from '../components/root'

export const routeCheck = (nextState) => _routeCheck(nextState, __SERVER__ || __SPA__)

export default {
    path: '',
    component: Root,
    name: 'page-app',

    indexRoute: {
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('../containers/pages/home').default)
            }, 'home')
        }
    },

    childRoutes: [

    ]
}