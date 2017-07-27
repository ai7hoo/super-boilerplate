import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Markdown from 'react-markdown'

import translate from 'sp-i18n'
import htmlHead from '@docUtils/html-head.js'
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
                ? (props.href.indexOf('://') < 0
                    ? <a href={props.href}>{props.children}</a>
                    : <a href={props.href} target="_blank">{props.children}</a>
                )
                : <Link to={props.href}>{props.children}</Link>
        );
    },
    CodeBlock: (props) => {
        /*switch (props.language) {
                            }*/
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
        /*switch (props.language) {
                            }*/
        return (
            <code>
                {props.literal
                    .replace(/\&lt;/g, '<')
                    .replace(/\&gt;/g, '>')
                }
            </code>
        )
    },
    Image: (props) => {
        // console.log(props)
        return <img
            src={props.src ? require('@docAssets/' + props.src) : null}
            alt={props.alt}
            title={props.title}
        />
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
            case '': doc = 'introduction'; break;
            case 'development': doc += '/concept'; break;
            case 'components': doc += '/structures'; break;
            case 'npm': doc += '/modules'; break;
        }
    }

    return doc
}

const getContent = (doc, localeId) => {
    return (dispatch) => import(`@docDocs/${doc}/${localeId}.md`)
        .then(data => {
            return dispatch({
                type: DOC_GET_CONTENT,
                doc: doc,
                content: data
            })
        }).catch(function (/*error*/) {
            dispatch({
                type: DOC_GET_CONTENT,
                doc: doc,
                content: 'ERROR'
            })
        })
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
export default class extends React.Component {
    static onServerRenderStoreExtend(store) {
        const state = store.getState()
        const dispatch = store.dispatch
        const preprocessTasks = []

        thisDoc = getDocFromPathname(state.routing.locationBeforeTransitions.pathname)
        const doc = (thisDoc.substr(0, 1) == '/') ? thisDoc.substr(1) : thisDoc

        preprocessTasks.push(
            dispatch(getContent(doc, state.localeId))
        )
        return preprocessTasks
    }
    static onServerRenderHtmlExtend(ext, store) {
        const state = store.getState()
        const pathnames = getDocFromPathname(state.routing.locationBeforeTransitions.pathname).split('/')
        let title

        if (pathnames.length == 1 && pathnames[0] == 'introduction') {
            title = 'Super Project'
        } else {
            title = translate('nav.' + pathnames.join('.')) + ' - ' + translate('nav.' + pathnames[0] + '.default') + ' - Super Project'
        }

        const head = htmlHead({
            state: state,
            title: title
        })

        ext.metas = ext.metas.concat(head.meta)
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
                render={(container) => {
                    if (__CLIENT__) console.log(`PageContainer rendering - Doc (${this.doc}) status ${container.props.isLoading ? 'LOADING' : 'INSTORE - render doc'}`)
                }}
            >
                {this.renderContent()}
            </PageContainer>
        )
    }
}