import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import translate from 'sp-i18n'

import { ImportStyle } from 'sp-css-import'
import style from './About.less'

@connect(mapStateToProps)
@ImportStyle(style)
export default class About extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <h2>About page</h2>
                <p>{translate('pageAbout.test')}</p>
                <p>{translate('pageAbout.test2')}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    prop: state.prop
})