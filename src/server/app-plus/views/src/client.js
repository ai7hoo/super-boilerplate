console.log('portals - client')



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router'

import store from './redux/store';
import routes from './router';

// 引用：多语言相关
import {
    register as i18nRegister,
    actionInit as i18nActionInit,
    actionLocales as i18nActionLocales
} from 'sp-i18n'
import { availableLocales } from './config/i18n'

import { onRouterChange } from './ui/layout/Nav.jsx'






// React initialization
store.dispatch(i18nActionInit({
    server: {
        lang: navigator.languages ? navigator.languages.join(',') : navigator.language
    }
}))
store.dispatch(i18nActionLocales())
i18nRegister(store.getState())

console.log('state', store.getState())

const routerConfig = {
    history: hashHistory,
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