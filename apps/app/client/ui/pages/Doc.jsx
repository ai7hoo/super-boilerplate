import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Markdown from 'react-markdown'

import translate from 'sp-i18n'
import htmlHead from '@appUtils/html-head.js'
import PageContainer from 'sp-ui-pagecontainer'

import { getContent } from '@appLogic/doc/api'

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
                        .replace(/&lt;/g, '<')
                        .replace(/&gt;/g, '>')
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
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                }
            </code>
        )
    },
    Image: (props) => {
        // console.log(props)
        return <img
            src={props.src ? require('@appAssets/' + props.src) : null}
            alt={props.alt}
            title={props.title}
        />
    }
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

@connect((state, ownProps) => {
    let doc
    if (__SPA__) {
        doc = getDocFromPathname(ownProps.location.pathname)
    }
    else if (__CLIENT__) {
        if (!thisDoc) thisDoc = getDocFromPathname(location.pathname)
        doc = thisDoc
        if (docByPathname[location.pathname]) doc = docByPathname[location.pathname]
        // console.log(doc, state.docs[doc] ? false : true)
    }
    else if (__SERVER__) {
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
        if (__SPA__ && this.props.location.pathname) return getDocFromPathname(this.props.location.pathname)
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
                    if (__CLIENT__ && __DEV__) console.log(`PageContainer rendering - Doc (${this.doc}) status ${container.props.isLoading ? 'LOADING' : 'INSTORE - render doc'}`)
                }}
            >
                {this.renderContent()}
            </PageContainer>
        )
    }
}