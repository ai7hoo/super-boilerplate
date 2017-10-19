import docReducer from '@docLogic/doc/reducer'
import { SERVER_REDUCER_NAME, serverReducer } from '@doc/server/server-redux'

export default [
    ['docs', docReducer],
    [SERVER_REDUCER_NAME, serverReducer]
]