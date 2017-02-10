import Layout from './layout/Layout'

export default {
    path: '',
    component: Layout,
    name: 'home',
    childRoutes: [
        {
            path: 'index',
            name: 'home.index',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./pages/HomePage').default)
                }, 'home.index')
            },
            isIndex: true
        }
    ]

}
