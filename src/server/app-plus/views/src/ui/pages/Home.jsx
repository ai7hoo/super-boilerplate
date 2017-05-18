import React from 'react'
// import { connect } from 'react-redux'

import translate from 'sp-i18n'
import navitems from '../nav-items.json'

import LinkPortal from '../components/link-portal.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './Home.less'

// @connect()
@ImportStyle(style)
export default class Home extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <div className="wrapper">
                    {navitems.map((item, index) => (
                        <LinkPortal key={index} className="item" to={item.path} icon={item.icon}>{translate(item.title)}</LinkPortal>
                    ))}
                </div>
            </div>
        )
    }
}