import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Markdown from 'react-markdown'

import translate from 'sp-i18n'
import htmlHead from 'Utils/html-head.js'
import PageContainer from 'sp-ui-pagecontainer'

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

const getPathname = (pathname) => {
    return (pathname.substr(0, 1) == '/') ? pathname.substr(1) : pathname
}

const getDocFromPathname = (pathname) => {
    let doc = getPathname(pathname)

    if (doc.indexOf('/') < 0) {
        switch (doc) {
            case 'development': doc += '/concept'; break;
            case 'components': doc += '/structures'; break;
            case 'npm': doc += '/modules'; break;
        }
    }

    return doc
}

const getContent = (doc, localeId) => {
    doc = (doc.substr(0, 1) == '/') ? doc.substr(1) : doc
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
    let doc
    if (__CLIENT__) {
        if (!thisDoc) thisDoc = getDocFromPathname(location.pathname)
        doc = thisDoc
        if (docByPathname[location.pathname]) doc = docByPathname[location.pathname]
        // console.log(doc, state.docs[doc] ? false : true)
    }
    if (__SERVER__) {
        doc = thisDoc
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

        thisDoc = getDocFromPathname(state.routing.locationBeforeTransitions.pathname)

        preprocessTasks.push(
            dispatch(getContent(thisDoc, state.localeId))
        )
        return preprocessTasks
    }
    static htmlExtends(ext, store) {
        const state = store.getState()
        const pathnames = getDocFromPathname(state.routing.locationBeforeTransitions.pathname).split('/')

        const head = htmlHead({
            state: state,
            title: translate('nav.' + pathnames.join('.')) + ' - ' + translate('nav.' + pathnames[0] + '.default') + ' - Super Project'
        })

        ext.meta = ext.meta.concat(head.meta)
        ext.title = head.title
    }

    get doc() {
        if (__CLIENT__ && docByPathname[location.pathname]) return docByPathname[location.pathname]
        return thisDoc
    }

    componentWillMount() {
        if (__CLIENT__) {
            if (!docByPathname[location.pathname]) {
                docByPathname[location.pathname] = thisDoc
            }
        }
    }

    shouldComponentUpdate(nextProps) {
        // console.log(this.props.isLoading, nextProps.isLoading)
        if (typeof nextProps.isLoading === 'undefined') return true
        if (!this.props.isLoading && nextProps.isLoading) return false
        return !nextProps.isLoading && !this.props.isLoading ? false : true
    }

    renderContent() {
        if (!this.props.content && __CLIENT__) {
            this.isClientRender = true
            setTimeout(() => {
                this.props.dispatch(getContent(this.doc, this.props.localeId))
            }, 200)
            return ''
        } else {
            /*return (
                <div dangerouslySetInnerHTML={{
                    __html: this.props.content
                }} />
            )*/
            thisDoc = null
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