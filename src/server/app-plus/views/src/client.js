console.log('portals - client')



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './redux/store';
import routes from './router';

// 引用：多语言相关
import {
    registerNonIsomorphic as i18nRegister,
    // register as i18nRegister,
    // actionInit as i18nActionInit,
    actionLocales as i18nActionLocales
} from 'sp-i18n'
import { availableLocales } from './config/i18n'

import { onRouterChange } from './ui/layout/Nav.jsx'






// React initialization
// const langList = navigator.languages ? navigator.languages.join(',') : navigator.language
// const action = i18nActionInit({
//     server: {
//         lang: langList
//     }
// })
// console.log(langList, action)
// store.dispatch(action)
// store.dispatch(i18nActionLocales())
// i18nRegister(store.getState())
const i18nInitAction = i18nRegister(availableLocales)
const localeId = i18nInitAction.localeId
store.dispatch(i18nInitAction)
store.dispatch(i18nRegister(require(`./locales/${localeId}.json`)))

console.log('state', store.getState())

const routerConfig = {
    history: syncHistoryWithStore(hashHistory, store),
    routes,
    onUpdate: () => {
        onRouterChange()
    }
}

console.log('router', routerConfig)

ReactDOM.render(
    <Provider store={store} >
        <Router {...routerConfig} />
    </Provider>,
    document.getElementById('root')
)