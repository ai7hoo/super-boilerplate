import React from 'react'
import { ImportStyle } from 'sp-css-import'
import ErrorHandle from '../../containers/ErrorHandle'

@ImportStyle(require('./index.less'))
export default class Root extends React.Component {
    render() {
        return (
            <ErrorHandle className={this.props.className}>
                {this.props.children}
            </ErrorHandle>
        )
    }
}