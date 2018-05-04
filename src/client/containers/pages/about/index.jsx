import React from 'react'
import { connect } from 'react-redux'
import About from '../../../components/pages/about'

const mapStateToProps = (state) => ({
    // feature1: state.feature1
})

@connect(mapStateToProps)
export default class extends React.Component {
    render() {
        return (
            <About {...this.props} />
        )
    }
}