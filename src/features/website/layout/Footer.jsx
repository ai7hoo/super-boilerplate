import React, { PropTypes } from 'react'

import { ImportStyle } from 'sp-css-import'
import style from './Footer.css'

@ImportStyle(style)
export default class extends React.Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        return (
            <div className={this.props.className}>
                Footer
            </div>
        )
    }
}