import React from 'react'
import { connect } from 'react-redux'

import PageContainer from 'sp-ui-pagecontainer'

import { ImportStyle } from 'sp-css-import'
import style from './Home.less'

@connect(mapStateToProps)
@ImportStyle(style)
export default class Home extends React.Component {

    render() {
        return (
            <PageContainer className={this.props.className}>
                Home page
                {this.props.children}
            </PageContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    prop: state.prop
})