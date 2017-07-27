import { routeCheck } from './'

export default {
    path: 'modules',
    name: 'modules',

    childRoutes: [
        {
            path: 'pwa',
            name: 'sp-pwa',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    if (routeCheck(nextState)) cb(null, require('@docUI/pages/Doc').default)
                }, 'modules.pwa')
            }
        }
    ]
}