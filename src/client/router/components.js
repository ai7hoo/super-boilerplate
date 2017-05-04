import { routeCheck } from './'

/**

/components
    子导航
    内容切换启用动画

    /components
        基础理念
        App、Store、Routing
        文件夹

    /components/containers
        容器&高阶组件
        PageContainer / ...
    
    /components/layouts
        布局组件
        Main / Nav / Sizing
    
    /components/ui
        UI组件

 */

export default {
    path: 'components',
    name: 'components',

    childRoutes: [{
        path: '',
        name: 'components.structures',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('UI/pages/Doc').default)
            }, 'components.structures')
        },
        isIndex: true
    }, {
        path: 'static',
        name: 'components.static',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('UI/pages/Doc').default)
            }, 'component.static')
        }
    }, {
        path: 'containers',
        name: 'components.containers',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('UI/pages/Doc').default)
            }, 'component.containers')
        }
    }]
}