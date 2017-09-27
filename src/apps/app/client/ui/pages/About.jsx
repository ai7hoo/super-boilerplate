import React from 'react'
import { connect } from 'react-redux'

import translate from 'sp-i18n'
import PageContainer from 'sp-ui-pagecontainer'
import htmlHead from '@appUtils/html-head.js'

import { ImportStyle } from 'sp-css-import'
import style from './About.less'

@connect(mapStateToProps)
@ImportStyle(style)
export default class About extends React.Component {
    static onServerRenderHtmlExtend(ext, store) {
        const head = htmlHead({
            state: store.getState(),
            title: translate('nav.about') + ' - Super Project'
        })

        ext.metas = ext.metas.concat(head.meta)
        ext.title = head.title
    }

    render() {
        return (
            <PageContainer
                className={this.props.className}
            >
                <h2>About page</h2>
                
                <p>{translate('pageAbout.test')}</p>
                <p>{translate('pageAbout.test2')}</p>
            </PageContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    prop: state.prop
})