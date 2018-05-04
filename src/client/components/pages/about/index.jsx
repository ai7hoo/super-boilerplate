import React from 'react'
import { ImportStyle } from 'sp-css-import'

@ImportStyle(require('./index.less'))
export default class About extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                About
            </div>
        )
    }
}