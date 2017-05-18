import React from 'react'

import Aside from './aside.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './page.less'

@ImportStyle(style)
export default class Page extends React.Component {
    render() {
        return (
            <div className={this.props.className + (this.props.aside ? ' aside' : '')}>
                {this.props.aside && (<Aside class="aside">{this.props.aside}</Aside>)}
                <div className="wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
}