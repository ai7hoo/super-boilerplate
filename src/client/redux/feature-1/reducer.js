import { FEATURE_1_CHANGE, FEATURE_1_GET_GITHUB_REPOS } from '../action-types'
import initialState from './initial-state'

export default (state = initialState, action) => {
    switch (action.type) {
        case FEATURE_1_CHANGE:
            return Object.assign({}, state, { number: action.number })
        case FEATURE_1_GET_GITHUB_REPOS:
            return Object.assign({}, state, { repos: action.repos })
    }
    return state
}