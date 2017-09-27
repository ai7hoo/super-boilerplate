import * as actions from './actions'

export const getContent = (doc, localeId) => {
    return (dispatch) => import(`@appDocs/${doc}/${localeId}.md`)
        .then(data => (
            dispatch(actions.getContent(doc, data))
        ))
        .catch(error => (
            dispatch(actions.getContent(doc, error))
        ))
}