import React from 'react'
import { Link } from 'react-router'

import translate from 'sp-i18n'

import Icon from './icon.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './link-portal.less'

@ImportStyle(style)
export default class LinkPortal extends React.Component {

    render() {
        return (
            <Link className={this.props.className} to={this.props.to}>
                <span className="wrapper">
                    <Icon className="icon" icon={this.props.icon} />
                    {this.props.children}
                </span>
            </Link>
        )
    }
}