import { routeCheck } from './'

export default {
    path: 'development',
    name: 'development',

    childRoutes: [{
        path: '',
        name: 'development.concept',
        doc: 'development/concept',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('@docUI/pages/Doc').default)
            }, 'development.concept')
        },
        isIndex: true
    }, {
        path: 'quickstart',
        name: 'development.quickstart',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('@docUI/pages/Doc').default)
            }, 'development.quickstart')
        }
    }, {
        path: 'globals',
        name: 'development.globals',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('@docUI/pages/Doc').default)
            }, 'development.globals')
        }
    }, {
        path: 'html',
        name: 'development.html',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('@docUI/pages/Doc').default)
            }, 'development.html')
        }
    }, {
        path: 'css',
        name: 'development.css',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('@docUI/pages/Doc').default)
            }, 'development.css')
        }
    }, {
        path: 'i18n',
        name: 'development.i18n',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('@docUI/pages/Doc').default)
            }, 'development.i18n')
        }
    }, {
        path: 'datatemplate',
        name: 'development.datatemplate',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('@docUI/pages/Doc').default)
            }, 'development.datatemplate')
        }
    }, {
        path: 'scripts',
        name: 'development.scripts',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('@docUI/pages/Doc').default)
            }, 'development.scripts')
        }
    }, {
        path: 'pwa',
        name: 'development.pwa',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                if (routeCheck(nextState)) cb(null, require('@docUI/pages/Doc').default)
            }, 'development.pwa')
        }
    }]
}