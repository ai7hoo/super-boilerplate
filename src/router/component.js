/**

/components
    子导航
    内容切换启用动画

    /components
        基础理念
        App、Store、Routing
        文件夹

    /components/containers
        RootContainer / PageContainer / ...
    
    /components/layouts
        Main / Nav / Sizing

 */

export default {
    path: 'component',
    name: 'component',

    childRoutes: [{
        path: '',
        name: 'component.layout',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('../ui/pages/component/Layout').default)
            }, 'component.layout')
        },
        isIndex: true
    }, {
        path: 'button',
        name: 'component.button',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('../ui/pages/component/Button').default)
            }, 'component.button')
        }
    }, {
        path: 'animation',
        name: 'component.animation',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('../ui/pages/component/Animation').default)
            }, 'component.animation')
        }
    }]
}