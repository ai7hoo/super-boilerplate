import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
                <ReactCSSTransitionGroup
                    component="div"
                    className="wrapper"
                    transitionName="main-transition"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}
                >
                    {this.props.children && React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </main>
        )
    }
}