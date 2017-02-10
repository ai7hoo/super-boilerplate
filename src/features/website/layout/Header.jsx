import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { ImportStyle } from 'sp-css-import'
import style from './Header.css'

@ImportStyle(style)
export default class extends React.Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        return (
            <div className={this.props.className}>
                Header Link: <Link to="/about"> About </Link>
            </div>
        )
    }
}