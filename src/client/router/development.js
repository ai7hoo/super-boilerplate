export default {
    path: 'development',
    name: 'development',

    childRoutes: [{
        path: '',
        name: 'development.concept',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/development/concept').default)
            }, 'development.concept')
        },
        isIndex: true
    }, {
        path: 'quickstart',
        name: 'development.quickstart',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/development/quickstart').default)
            }, 'development.quickstart')
        }
    }, {
        path: 'html',
        name: 'development.html',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/development/html').default)
            }, 'development.html')
        }
    }, {
        path: 'globals',
        name: 'development.globals',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/development/globals').default)
            }, 'development.globals')
        }
    }, {
        path: 'css',
        name: 'development.css',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/development/css').default)
            }, 'development.css')
        }
    }, {
        path: 'i18n',
        name: 'development.i18n',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/development/i18n').default)
            }, 'development.i18n')
        }
    }, {
        path: 'datatemplate',
        name: 'development.datatemplate',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('UI/pages/development/datatemplate').default)
            }, 'development.datatemplate')
        }
    }]
}