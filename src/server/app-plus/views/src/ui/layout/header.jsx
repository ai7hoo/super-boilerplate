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
                <div className="wrapper">
                    <h1>PROJECT NAME</h1>
                    <h2 className="sub">Administration Portals</h2>
                </div>
            </header>
        )
    }
}