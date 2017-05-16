import React from 'react'
import { connect } from 'react-redux'

import { ImportStyle } from 'sp-css-import'
import style from './App.less'

import Main from './layout/Main.jsx'
import Nav from './layout/Nav.jsx'

console.log('App')

@connect()
@ImportStyle(style)
export default class extends React.Component {
    /*
     * this.isAppReady      是否已初始化
     */

    // CLIENT 端第一次渲染时执行(仅一次)
    // 可在此时执行针对 CLIENT 端的初始化操作，如初始化微信SDK
    // componentDidMount() {
    // }

    // 通常 router 更变(访问新的URL)后会触发这一事件
    // 可在此时执行如 Google Analytics 之类的操作
    // componentDidUpdate() {
    // }

    appReady(timeout = 0) {
        if (this.isAppReady) {
            this.isAppReady = true
            setTimeout(() => {
                console.log('appReady: admin')
                document.body.classList.add('is-ready')
            }, timeout)
        }
    }

    render() {
        console.log('App - render()')
        this.appReady(100)

        return (
            <div id="app" className={this.props.className}>
                <Nav location={this.props.location} />
                <Main location={this.props.location}>
                    {this.props.children}
                </Main>
            </div>
        )
    }
}