import React from 'react'
import { connect } from 'react-redux'

import translate from 'sp-i18n'

import LinkPortal from '../components/link-portal.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './Home.less'

@connect()
@ImportStyle(style)
export default class Home extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <LinkPortal className="item" to="/db" icon="database">{translate('db.title')}</LinkPortal>
                <LinkPortal className="item" to="/wx" icon="wechat">{translate('wx.title')}</LinkPortal>
                <LinkPortal className="item" to="/task" icon="list-numbered">{translate('task.title')}</LinkPortal>
            </div>
        )
    }
}