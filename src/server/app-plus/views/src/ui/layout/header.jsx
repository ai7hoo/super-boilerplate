import React from 'react'
import { connect } from 'react-redux'

import { ImportStyle } from 'sp-css-import'
import style from './header.less'

@connect(state => {
    console.log(state)
    return {}
})
@ImportStyle(style)
export default class extends React.Component {
    render() {
        return (
            <header id="header" className={this.props.className}>
                <div className="title">
                    <h1>
                        PROJECT NAME
                        <small className="sub">Administration Portals</small>
                    </h1>
                </div>
            </header>
        )
    }
}