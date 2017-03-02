export default {
    path: 'component',
    name: 'component',
    childRoutes: [{
        path: 'layout',
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