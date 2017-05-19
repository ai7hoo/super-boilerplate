import React from 'react'
import { Link } from 'react-router'

import Icon from '../components/icon.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './aside-item-group.less'

@ImportStyle(style)
export default class AsideItemGroup extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.title && <h3>{this.props.title}</h3>}
                {this.props.children}
            </div>
        )
    }
}

export class AsideItemGroupLink extends React.Component {
    render() {
        const props = {...this.props}
        delete props.icon
        return (
            <a {...props}>
                {this.props.icon
                    ? <Icon className="icon" icon={this.props.icon} />
                    : <span className="dot" />
                }
                {this.props.children}
            </a>
        )
    }
}