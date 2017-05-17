import { createStore, combineReducers } from 'redux'
import { reducerLocaleId as i18nReducerLocaleId, reducerLocales as i18nReducerLocales } from 'sp-i18n'
import { routerReducer } from 'react-router-redux'

// Combine Reducers
const reducers = combineReducers({
    'localeId': i18nReducerLocaleId,
    'locales': i18nReducerLocales,
    routing: routerReducer
})

const store = createStore(reducers)

export default store