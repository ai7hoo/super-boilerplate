import { DOC_GET_CONTENT } from '../../redux/action-types'

export const getContent = (doc, data) => ({
    type: DOC_GET_CONTENT,
    doc: doc,
    content: data
})