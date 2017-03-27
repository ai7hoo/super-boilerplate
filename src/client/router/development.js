export default {
    path: 'development',
    name: 'development',

    childRoutes: [{
        path: '',
        name: 'development.concept',
        doc: 'development/concept',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/Doc').default)
            }, 'development.concept')
        },
        isIndex: true
    }, {
        path: 'quickstart',
        name: 'development.quickstart',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/Doc').default)
            }, 'development.quickstart')
        }
    }, {
        path: 'globals',
        name: 'development.globals',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/Doc').default)
            }, 'development.globals')
        }
    }, {
        path: 'html',
        name: 'development.html',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/Doc').default)
            }, 'development.html')
        }
    }, {
        path: 'css',
        name: 'development.css',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/Doc').default)
            }, 'development.css')
        }
    }, {
        path: 'i18n',
        name: 'development.i18n',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/Doc').default)
            }, 'development.i18n')
        }
    }, {
        path: 'datatemplate',
        name: 'development.datatemplate',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/Doc').default)
            }, 'development.datatemplate')
        }
    }]
}