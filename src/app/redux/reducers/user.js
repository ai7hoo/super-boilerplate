import {
    USER_LOGIN,
} from '../reducers'

const initialState = {
    // id: 123,
}

export default function (
    state = initialState,
    {
        type,
        ...obj
    }
) {
    switch (type) {

        case USER_LOGIN: {
            return Object.assign({}, initialState, obj.data)
        }

    }

    return state

}
