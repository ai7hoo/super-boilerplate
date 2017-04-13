import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { routerReducer } from 'react-router-redux'
import { redux, createConfigureStore, router, run } from 'sp-base/client'

// 引用：多语言相关
import { reducerLocaleId as i18nReducerLocaleId, reducerLocales as i18nReducerLocales, register as i18nRegister } from 'sp-i18n'
import { availableLocales } from 'Config/i18n'

// 引用：router
import clientRouter from './router'

// 其他引用，仅针对本项目案例
import { reducer as docsReducer } from './ui/pages/Doc.jsx'
import { onRouterChange } from './ui/layout/Nav.jsx'



// ----------------------------------------------------------------------------
// 代码中行首的 /***/ 标记代表该行代码仅针对本项目案例
// ----------------------------------------------------------------------------


// redux middleware
redux.use(thunk)
redux.use(routerMiddleware(browserHistory))

// 设定项目所用的 redux reducer
redux.reducer.use('routing', routerReducer)
redux.reducer.use('localeId', i18nReducerLocaleId)
redux.reducer.use('locales', i18nReducerLocales)
/***/
redux.reducer.use('docs', docsReducer)

// 设定项目所用的 react-router
router.use({
    path: '',
    // component: App, 可扩展1层component
    childRoutes: [clientRouter]
})

let __baidu_tongji_count = 0
// 定制 react-router
router.ext({
    onUpdate: () => {

        // 统计代码第一次默认走html引入js
        if (!__DEV__ && __CLIENT__) {
            if (__baidu_tongji_count !== 0) {
                _hmt.push(['_trackPageview', window.location.pathname])
            }

            __baidu_tongji_count++
        }

        /***/
        onRouterChange()
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