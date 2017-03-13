import React, { PropTypes } from 'react'



export default class extends React.Component {
    /*
     * this.isAppReady      是否已初始化
     */
    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object
    }

    appReady(timeout = 0) {
        if (__CLIENT__ && !this.isAppReady) {
            this.isAppReady = true
            setTimeout(() => {
                console.log('appReady')
                document.body.classList.add('is-ready')
            }, timeout)
        }
    }

    // CLIENT 端第一次渲染时执行(仅一次)
    // 可在此时执行针对 CLIENT 端的初始化操作，如初始化微信SDK
    // componentDidMount() {
    // }

    // 通常 router 更变(访问新的URL)后会触发这一事件
    // 可在此时执行如 Google Analytics 之类的操作
    // componentDidUpdate() {
    // }

    renderChildren() {
        return React.Children.only(this.props.children);
    }

    render() {
        if (__CLIENT__) this.appReady(100)
        return this.renderChildren()
    }
}