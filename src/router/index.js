import App from '../ui/App.jsx'
import component from './component'

export default {
    path: '',
    component: App,
    name: 'page-app',
    childRoutes: [
        component,
        {
            path: 'home',
            name: 'page-home',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../ui/pages/Home').default)
                }, 'home')
            },
            isIndex: true
        },
        {
            path: 'about',
            name: 'page-about',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../ui/pages/About').default)
                }, 'about')
            }
        }
    ]
}