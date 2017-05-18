import React from 'react'

import { ImportStyle } from 'sp-css-import'
import style from './icon.less'

@ImportStyle(style)
export default class Icon extends React.Component {
    render() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"

                className={this.props.className}
                style={this.props.style}

                width={this.props.width}
                height={this.props.height}
                viewBox={this.props.viewBox}
            >
                <use xlinkHref={'#icon-' + this.props.icon}></use>
            </svg>
        )
    }
}