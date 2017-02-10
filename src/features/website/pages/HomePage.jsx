import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import * as actions from './redux/actions'
import { ImportStyle } from 'sp-css-import'
import style from './HomePage.less'

// @connect(mapStateToProps, mapDispatchToProps)
@ImportStyle(style)
export default class HomePage extends Component {

    constructor(props) {
        super(props)
    }

    // static preprocess (state, dispatch) {
    //     const preprocessTasks = []
    //     preprocessTasks.push(
    //         dispatch(actions.timePassedAsync(state))
    //     )
    //     return preprocessTasks
    // }

    render() {
        return (
            <div className={this.props.className}>
                <h1>Home Page</h1>
            </div>
        )
    }
}

// function mapStateToProps (state) {
//     return {
//         second: state.about
//     }
// }

// function mapDispatchToProps (dispatch) {
//     return {
//         actions: bindActionCreators({...actions }, dispatch)
//     }
// }
