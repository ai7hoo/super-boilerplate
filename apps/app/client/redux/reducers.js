import docReducer from '@appLogic/doc/reducer'
import { SERVER_REDUCER_NAME, serverReducer } from '@app/server/server-redux'

export default [
    ['docs', docReducer],
    [SERVER_REDUCER_NAME, serverReducer]
]