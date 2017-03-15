import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { ImportStyle } from 'sp-css-import'
import style from './Scripts.less'

@connect((state, ownProps) => {
    prop: state.prop
})
@ImportStyle(style)
export default class extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                NPM / SCRIPTS
                {this.props.children}
            </div>
        )
    }
}