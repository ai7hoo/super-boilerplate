import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { routerReducer } from 'react-router-redux'
import { redux, createConfigureStore, router, run } from 'sp-base/client'

// 引用：多语言相关
import { reducerLocaleId as i18nReducerLocaleId, reducerLocales as i18nReducerLocales, register as i18nRegister } from 'sp-i18n'
import { availableLocales } from '../config/i18n'

// 引用：reducer
import { reducer as docsReducer } from './ui/pages/Doc.jsx'

// 引用：router
import clientRouter from './router'

// ----------------------------------------------------------------------------

// redux middleware
redux.use(thunk)
redux.use(routerMiddleware(browserHistory))

// 设定项目所用的 redux reducer
redux.reducer.use('routing', routerReducer)
redux.reducer.use('localeId', i18nReducerLocaleId)
redux.reducer.use('locales', i18nReducerLocales)
redux.reducer.use('docs', docsReducer)

// 设定项目所用的 react-router
router.use({
    path: '',
    // component: App, 可扩展1层component
    childRoutes: [clientRouter]
})
// 定制 react-router
router.ext({
    onUpdate: (e) => {
        // on react-router update
    }
})

if (__SERVER__) {
    // 载入所有多语言文件
    let locales = {}
    availableLocales.forEach(locale => {
        locales[locale] = require(`Locales/${locale}.json`)
    })
    // 服务器端注册多语言
    i18nRegister(availableLocales, locales)
}

//
if (__CLIENT__) {
    run()

    // 客户端注册多语言
    i18nRegister(__REDUX_STATE__)
}

//
export {
    router,
    createConfigureStore
}
