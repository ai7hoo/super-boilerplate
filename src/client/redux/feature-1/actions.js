import { FEATURE_1_CHANGE, FEATURE_1_GET_GITHUB_REPOS } from '../action-types'
import { getGithubRepos } from '../../api/github'

export const change = (number) => ({
    type: FEATURE_1_CHANGE,
    number
})

export const getRepos = () => (dispatch) => {
    getGithubRepos().then(repos => dispatch({
        type: FEATURE_1_GET_GITHUB_REPOS,
        repos
    }))
}