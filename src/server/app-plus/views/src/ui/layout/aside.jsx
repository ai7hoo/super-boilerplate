import React from 'react'

import { ImportStyle } from 'sp-css-import'
import style from './aside.less'

@ImportStyle(style)
export default class Aside extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}