import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import PageContainer from '../containers/PageContainer.jsx'
import { DOC_GET_CONTENT } from '../../redux/action-types'

import { ImportStyle } from 'sp-css-import'
import style from './Doc.less'

let thisDoc

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case DOC_GET_CONTENT:
            if (!action.doc) return
            var o = {}
            o[action.doc] = action.content
            return Object.assign({}, state, o)
    }
    return state
}

const getContent = (doc, localeId) => {
    return (dispatch) => {
        // if (store && store.requestData) {
        //     return dispatch(timePassed(store.requestData))
        // }

        return dispatch(dispatch => {
            return import(`Docs/${doc}/${localeId}.md`)
                .then(data => {
                    return dispatch({
                        type: DOC_GET_CONTENT,
                        doc: doc,
                        content: data
                    })
                }).catch(function (error) {
                    dispatch({
                        type: DOC_GET_CONTENT,
                        doc: doc,
                        content: 'ERROR'
                    })
                })
        })
    }
}

@connect((state) => ({
    localeId: state.localeId,
    content: state.docs[thisDoc],
    isLoading: state.docs[thisDoc] ? false : true
}))
@ImportStyle(style)
class Doc extends React.Component {
    static preprocess(state, dispatch) {
        const preprocessTasks = []
        preprocessTasks.push(
            dispatch(getContent(thisDoc, state.localeId))
        )
        return preprocessTasks
    }

    renderContent() {
        if (!this.props.content && __CLIENT__) {
            this.isClientRender = true
            this.props.dispatch(getContent(thisDoc, this.props.localeId))
            return ''
        } else {
            return (
                <div dangerouslySetInnerHTML={{
                    __html: this.props.content
                }} />
            )
        }
    }

    render() {
        return (
            <PageContainer
                className={this.props.className}
                isLoading={this.props.isLoading}
            >
                {this.renderContent()}
            </PageContainer>
        )
    }
}

export const register = (doc) => {
    thisDoc = doc
}

export const getComponent = (doc) => {
    register(doc)
    return Doc
}

export default Doc