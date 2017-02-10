import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { routerReducer } from 'react-router-redux'
import { redux, createConfigureStore, router, run } from 'sp-base/client'
import { route as websiteRoute } from './features/website'
import { reducer, route as aboutRoute } from './features/about'

// redux middleware
redux.use(thunk)
redux.use(routerMiddleware(browserHistory))

// redux reducer
redux.reducer.use('routing', routerReducer)
redux.reducer.use('about', reducer)

// react-router
router.use({
    path: '',
    // component: App, 可扩展1层component
    childRoutes: [websiteRoute, aboutRoute]
})

//
if (__CLIENT__) run()

//
export {
    router,
    createConfigureStore
}
