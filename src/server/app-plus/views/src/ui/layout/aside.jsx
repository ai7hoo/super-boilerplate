import React from 'react'

import { ImportStyle } from 'sp-css-import'
import style from './aside.less'

@ImportStyle(style)
export default class Aside extends React.Component {
    render() {
        return (
            <aside className={this.props.className}>
                {this.props.children}
            </aside>
        )
    }
}