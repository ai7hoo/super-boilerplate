import React from 'react'
import { connect } from 'react-redux'

import translate from 'sp-i18n'
import PageContainer from 'sp-ui-pagecontainer'

import { ImportStyle } from 'sp-css-import'
import style from './Home.less'

@connect(mapStateToProps)
@ImportStyle(style)
export default class Home extends React.Component {

    render() {
        return (
            <PageContainer className={this.props.className}>
                {translate('welcome')}
                
                <p>{translate('pageAbout.test')}</p>
                <p>{translate('pageAbout.test2')}</p>
            </PageContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    prop: state.prop
})