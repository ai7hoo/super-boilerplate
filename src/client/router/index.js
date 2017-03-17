import App from 'UI/App.jsx'

import components from './components'
import npm from './npm'

export default {
    path: '',
    component: App,
    name: 'page-app',
    childRoutes: [
        components,
        npm,
        
        {
            path: 'home',
            name: 'home',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('UI/pages/Home').default)
                }, 'home')
            },
            isIndex: true
        },
        {
            path: 'about',
            name: 'about',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('UI/pages/About').default)
                }, 'about')
            }
        }
    ]
}