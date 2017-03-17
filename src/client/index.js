const path = require('path')

import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { routerReducer } from 'react-router-redux'

import { redux, createConfigureStore, router, run } from 'sp-base/client'

import { reducerLocaleId as i18nReducerLocaleId, reducerLocales as i18nReducerLocales, register as i18nRegister } from 'sp-i18n'
import { availableLocales } from '../config/i18n'
import { reducer as docsReducer } from './ui/containers/DocContainer.jsx'

import clientRouter from './router'

// redux middleware
redux.use(thunk)
redux.use(routerMiddleware(browserHistory))

// redux reducer
redux.reducer.use('routing', routerReducer)
redux.reducer.use('localeId', i18nReducerLocaleId)
redux.reducer.use('locales', i18nReducerLocales)
redux.reducer.use('docs', docsReducer)

// react-router
router.use({
    path: '',
    // component: App, 可扩展1层component
    childRoutes: [/*websiteRoute, aboutRoute,*/ clientRouter]
})
router.ext({
    onUpdate: (e) => {
        // on react-router update
    }
})

if (__SERVER__) {
    let locales = {}
    availableLocales.forEach(locale => {
        locales[locale] = require(`Locales/${locale}.json`)
    })
    i18nRegister(availableLocales, locales)
}

//
if (__CLIENT__) {
    run()

    // console.log(__REDUX_STATE__)
    i18nRegister(__REDUX_STATE__)
}

//
export {
    router,
    createConfigureStore
}
