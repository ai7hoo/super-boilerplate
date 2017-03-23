import React from 'react'
import { connect } from 'react-redux'

import translate from 'sp-i18n'

import PageContainer from '../containers/PageContainer.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './About.less'

@connect(mapStateToProps)
@ImportStyle(style)
export default class About extends React.Component {

    render() {
        return (
            <PageContainer
                className={this.props.className}
                isLoading={this.props.isLoading}
            >
                <h2>About page</h2>
            </PageContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    prop: state.prop
})