import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { ImportStyle } from 'sp-css-import'
import style from './Animation.less'

@connect(mapStateToProps)
@ImportStyle(style)
export default class Animation extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                Animation page
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    prop: state.prop
})