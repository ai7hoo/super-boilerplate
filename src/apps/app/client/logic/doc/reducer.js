import { DOC_GET_CONTENT } from '../../redux/action-types'

export default (state = {}, action) => {
    switch (action.type) {
        case DOC_GET_CONTENT:
            if (!action.doc) return
            var o = {}
            o[action.doc] = action.content
            return Object.assign({}, state, o)
    }
    return state
}