import { routeCheck } from './'

/**

/npm
    NPM相关说明

    /npm
        基础modules
    
    /npm/scripts
        基础脚本

 */

export default {
    path: 'npm',
    name: 'npm',

    childRoutes: [
        {
            path: '',
            name: 'npm.modules',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    if (routeCheck(nextState)) cb(null, require('UI/pages/Doc').default)
                }, 'npm.modules')
            },
            isIndex: true
        }, {
            path: 'scripts',
            name: 'npm.scripts',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    if (routeCheck(nextState)) cb(null, require('UI/pages/Doc').default)
                }, 'npm.scripts')
            }
        }
    ]
}