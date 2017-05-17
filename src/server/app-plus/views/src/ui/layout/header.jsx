import React from 'react'
import { connect } from 'react-redux'

import { ImportStyle } from 'sp-css-import'
import style from './header.less'

@connect(state => {
    console.log(state)
})
@ImportStyle(style)
export default class extends React.Component {
    render() {
        return (
            <header id="header" className={this.props.className}>
                HEADER
            </header>
        )
    }
}