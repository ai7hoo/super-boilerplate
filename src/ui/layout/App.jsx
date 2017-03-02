import React from 'react'
import { Link } from 'react-router'

import { ImportStyle } from 'sp-css-import'
import style from './App.less'


@ImportStyle(style)
export default class App extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <Link to='/'>Home</Link><br />
                <Link to='/about'>About</Link><br />
                <Link to='/component'>Component - Layout</Link><br />
                <Link to='/component/button'>Component - Button</Link><br />
                <Link to='/component/animation'>Component - Animation</Link><br />
                {this.props.children}
            </div>
        )
    }
}
