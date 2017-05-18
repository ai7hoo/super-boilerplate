import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router'

import translate from 'sp-i18n'
import navitems from '../nav-items.json'

import Icon from '../components/icon.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './header.less'

// @connect(state => {
//     console.log(state)
//     return {}
// })
@ImportStyle(style)
export default class extends React.Component {
    renderNavLink(item, index) {
        return (
            <Link
                className={"nav-item" + (this.props.location.pathname === item.path ? ' on' : '')}
                to={item.path}
                key={index}
            >
                <Icon className="icon" icon={item.icon}/>
                {translate(item.title)}
            </Link>
        )
    }
    render() {
        return (
            <header id="header" className={this.props.className}>
                <div className="title">
                    <h1>
                        PROJECT NAME
                        <small className="sub">Administration Portals</small>
                    </h1>
                </div>
                <div className="nav">
                    {navitems.map((item, index) => (
                        this.renderNavLink(item, index)
                    ))}
                </div>
            </header>
        )
    }
}