import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
    init as i18nInit,
    checkLocalesReady as i18nCheckReady,
    getLanglistFromState
} from '../../functions/i18n.js'

import LazilyLoad, { importLazy } from './LazilyLoad.jsx'


@connect(
    (state, /*ownProps*/) => {
        return {
            lang: getLanglistFromState(state)
        }
    }
)
export default class extends React.Component {
    /*
     * this.isAppReady      是否已初始化
     */
    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object,
        lang: PropTypes.string
    }

    i18nInit() {
        return i18nInit(this.props.lang)
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
        if (__SERVER__) {
            return this.renderChildren()
        }

        if (__CLIENT__) {
            if (i18nCheckReady()) return this.renderChildren()

            // 利用 LazilyLoad 阻断 client 端 react 的第一次渲染
            // 在达成目标条件(本例中为获取语言包)后，执行渲染
            return (
                <LazilyLoad modules={{
                    locales: () => importLazy(this.i18nInit())
                }}>
                    {
                        ({ locales }) => {
                            this.appReady(100)
                            return this.renderChildren()
                        }
                    }
                </LazilyLoad>
            )
        }
    }
}