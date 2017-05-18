import React from 'react'
import { connect } from 'react-redux'

import translate from 'sp-i18n'

import Page from '../layout/page.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './db.less'

@connect()
@ImportStyle(style)
export default class PageDatabase extends React.Component {
    render() {
        return (
            <Page
                className={this.props.className}
                aside={<h2>ASIDE</h2>}
            >
                <h2>{translate('db.title')}</h2>
            </Page>
        )
    }
}