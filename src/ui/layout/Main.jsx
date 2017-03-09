import React, { PropTypes } from 'react'

import { ImportStyle } from 'sp-css-import'
import style from './Main.less'

// @connect(mapStateToProps, mapDispatchToProps)
@ImportStyle(style)
export default class extends React.Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        return (
            <main id="main" className={this.props.className}>
                {this.props.children}
            </main>
        )
    }
}