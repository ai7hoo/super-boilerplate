import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './redux/actions'
import { ImportStyleInComponent } from 'react-import-style'
import style from './AboutPage.css'

@ImportStyleInComponent(style)
@connect(mapStateToProps, mapDispatchToProps)
export default class LoginPage extends Component {

    constructor (props) {
        super(props)
    }

    render () {

        return (
            <div className="about">
                {this.props.children}
                <h1>About Page</h1>
                <div>Passed: {this.props.second}s</div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        second: state.about
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators({...actions }, dispatch)
    }
}
