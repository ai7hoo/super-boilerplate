/*
    RootContainer
        App
            Nav
            Main
                SubNav
                PageContainer
                    this.props.children
*/

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import translate from 'sp-i18n'

import htmlHead from '../functions/html-head.js'

import RootContainer from './high-order/RootContainer.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './App.less'

import Main from './layout/Main.jsx'

@connect(
    // (state) => {
    //     console.log(state)
    // }
)
@ImportStyle(style)
export default class extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object
    }

    // 仅针对 __SERVER__
    // static preprocess(state, dispatch) {
    //     const preprocessTasks = []
    //     preprocessTasks.push(
    //     )
    //     return preprocessTasks
    // }

    // 仅针对 __SERVER__
    static htmlExtends(ext, store) {
        const state = store.getState()

        const head = htmlHead({
            state: state
        })

        ext.meta = ext.meta.concat(head.meta)
        ext.title = head.title
    }

    render() {
        return (
            <RootContainer location={this.props.location}>
                <div id="app" className={this.props.className}>
                    <nav>
                        <strong>{translate('welcome')}</strong>
                        <br/>
                        <Link to='/'>Home</Link><br />
                        <Link to='/about'>About</Link><br />
                        <Link to='/component'>Component - Layout</Link><br />
                        <Link to='/component/button'>Component - Button</Link><br />
                        <Link to='/component/animation'>Component - Animation</Link><br />
                    </nav>
                    <Main>
                        {this.props.children}
                    </Main>
                </div>
            </RootContainer>
        )
    }
}