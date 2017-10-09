import React from 'react'
import { connect } from 'react-redux'

import PageContainer from 'sp-ui-pagecontainer'
import translate from 'sp-i18n'

import { ImportStyle } from 'sp-css-import'
import style from './Home.less'

@connect(mapStateToProps)
@ImportStyle(style)
export default class Home extends React.Component {

    render() {
        return (
            <PageContainer className={this.props.className}>
                <h2>Home page</h2>
                <p>{translate('welcome', {time: new Date()})}</p>
                {this.props.children}
            </PageContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    prop: state.prop
})