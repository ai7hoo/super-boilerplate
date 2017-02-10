import React, { PropTypes } from 'react'

import { ImportStyle } from 'sp-css-import'
import style from './Layout.css'

import Footer from './Footer'
import Header from './Header'


@ImportStyle(style)
export default class extends React.Component {
    static propTypes = {
        children: PropTypes.node
    }

    componentWillMount() {
        // if(__CLIENT__) require('./App.g.less')
    }

    componentDidMount() {
        // setTimeout(() => {
        //     document.body.classList.add('is-ready')
        // }, 2000)
    }

    render() {
        return (
            <div id="app" className={this.props.className}>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}