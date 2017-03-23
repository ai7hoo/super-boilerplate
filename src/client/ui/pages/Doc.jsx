import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Markdown from 'react-markdown'

import PageContainer from '../containers/PageContainer.jsx'
import { DOC_GET_CONTENT } from '../../redux/action-types'

import { ImportStyle } from 'sp-css-import'
import style from './Doc.less'

let thisDoc
let docByPathname = {}

const markdownRenderers = {
    Link: (props) => {
        return (
            props.href.match(/^(https?:)?\/\//)
                ? <a href={props.href}>{props.children}</a>
                : <Link to={props.href}>{props.children}</Link>
        );
    },
    CodeBlock: (props) => {
        {/*switch (props.language) {
                            }*/}
        return (
            <pre>
                <code>
                    {props.literal
                        .replace(/\n/g, '\r\n')
                        .replace(/\&lt;/g, '<')
                        .replace(/\&gt;/g, '>')
                    }
                </code>
            </pre>
        )
    },
    Code: (props) => {
        {/*switch (props.language) {
                            }*/}
        return (
            <code>
                {props.literal
                    .replace(/\&lt;/g, '<')
                    .replace(/\&gt;/g, '>')
                }
            </code>
        )
    }
}

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

@connect((state) => {
    let doc = thisDoc
    if (__CLIENT__) {
        if (docByPathname[location.pathname]) doc = docByPathname[location.pathname]
    }
    return {
        localeId: state.localeId,
        content: state.docs[doc],
        isLoading: state.docs[doc] ? false : true
    }
})
@ImportStyle(style)
class Doc extends React.Component {
    static preprocess(state, dispatch) {
        const preprocessTasks = []
        preprocessTasks.push(
            dispatch(getContent(thisDoc, state.localeId))
        )
        return preprocessTasks
    }

    get doc() {
        if (__CLIENT__) return docByPathname[location.pathname] || thisDoc
        return thisDoc
    }

    componentWillMount() {
        if (__CLIENT__) {
            if (!docByPathname[location.pathname])
                docByPathname[location.pathname] = thisDoc
        }
    }

    shouldComponentUpdate(nextProps) {
        if (typeof nextProps.isLoading === 'undefined') return true
        return !nextProps.isLoading && !this.props.isLoading ? false : true
    }

    renderContent() {
        if (!this.props.content && __CLIENT__) {
            this.isClientRender = true
            this.props.dispatch(getContent(this.doc, this.props.localeId))
            return ''
        } else {
            /*return (
                <div dangerouslySetInnerHTML={{
                    __html: this.props.content
                }} />
            )*/
            return (
                <Markdown
                    source={this.props.content}
                    renderers={markdownRenderers}
                    childAfter={
                        <span className="end-of-doc"></span>
                    }
                />
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