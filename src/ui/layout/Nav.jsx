import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import translate from 'sp-i18n'

import { ImportStyle } from 'sp-css-import'
import style from './Nav.less'

// @connect(mapStateToProps, mapDispatchToProps)
@ImportStyle(style)
export default class extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object
    }

    render() {
        return (
            <nav id="nav" className={this.props.className}>
                <strong>{translate('welcome')}</strong>
                <br />
                <Link to='/'>Home</Link><br />
                <Link to='/about'>About</Link><br />
                <Link to='/component'>Component - Layout</Link><br />
                <Link to='/component/button'>Component - Button</Link><br />
                <Link to='/component/animation'>Component - Animation</Link><br />
            </nav>
        )
    }
}