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
        name: 'components.concept',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/components/Concept').default)
            }, 'components.concept')
        },
        isIndex: true
    }, {
        path: 'containers',
        name: 'components.containers',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/components/containers').default)
            }, 'component.containers')
        }
    }, {
        path: 'layouts',
        name: 'components.layouts',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/components/Layouts').default)
            }, 'components.layouts')
        },
    }, {
        path: 'ui',
        name: 'components.ui',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/components/UI').default)
            }, 'components.ui')
        },
    }]
}