import { createStore, combineReducers } from 'redux'
import { reducerLocaleId as i18nReducerLocaleId, reducerLocales as i18nReducerLocales } from 'sp-i18n'

// Combine Reducers
const reducers = combineReducers({
    'localeId': i18nReducerLocaleId,
    'locales': i18nReducerLocales
})

const store = createStore(reducers)

export default store