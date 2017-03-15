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
                    cb(null, require('../ui/pages/npm/Modules').default)
                }, 'npm.modules')
            },
            isIndex: true
        }, {
            path: 'scripts',
            name: 'npm.button',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../ui/pages/npm/Scripts').default)
                }, 'npm.scripts')
            }
        }
    ]
}