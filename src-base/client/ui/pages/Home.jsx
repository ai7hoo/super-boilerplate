import React from 'react'
import { connect } from 'react-redux'

import translate from 'sp-i18n'

import PageContainer from '../containers/PageContainer.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './Home.less'

@connect(mapStateToProps)
@ImportStyle(style)
export default class Home extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                {translate('welcome')}
                
                <p>{translate('pageAbout.test')}</p>
                <p>{translate('pageAbout.test2')}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    prop: state.prop
})