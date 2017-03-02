import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { ImportStyle } from 'sp-css-import'
import style from './About.less'

@connect(mapStateToProps)
@ImportStyle(style)
export default class About extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                About page
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    prop: state.prop
})