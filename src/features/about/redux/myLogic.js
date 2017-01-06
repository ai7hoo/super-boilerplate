import { TIME_PASSED } from './constants'

const ONE_SECOND = 1000

export function timePassed (data) {
    return {
        type: TIME_PASSED,
        data
    }
}

export function timePassedAsync (state) {
    return (dispatch) => {
        // if (state && state.requestData) {
        //     return dispatch(timePassed(state.requestData))
        // }

        return dispatch(dispatch => new Promise((reslove, reject) => {
            let st = setTimeout(() => {

                reslove(1)
                clearTimeout(st)
            }, 30)
        }).then(data => dispatch(timePassed(data))))
    }
}

export function timePassedForever () {
    return (dispatch) => new Promise((resolve, reject) => {
        const st = setTimeout(() => {
            clearTimeout(st)
            // timePassedForever()
            resolve()
        }, ONE_SECOND)
    }).then(() => {
        dispatch({
            type: TIME_PASSED
        })
    })
}


export const reducer = (state, action) => {

    switch (action.type) {
        case TIME_PASSED:
            return state + action.data
        default:
            return state
    }

}

