import React from 'react'
import { Link, IndexLink } from 'react-router'

import translate, { localeId } from 'sp-i18n'
import routes from '../../router'

import LangSwitch from '../components/LangSwitch.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './Nav.less'

@ImportStyle(style)
export default class extends React.Component {
    renderChildRounte(route, index) {
        return (
            <span key={index}>
                <Link to={`/${route.path}`} activeClassName="on" key={index} className="level-1">{translate('nav.' + route.name + '.default')}</Link>
                <span className="subs">
                    <IndexLink to={`/${route.path}`} className="level-2" activeClassName="on">{translate('nav.' + route.indexRoute.name)}</IndexLink>
                    {
                        route.childRoutes.map((subRoute, index) => (
                            <Link to={`/${route.path}/${subRoute.path}`} className="level-2" activeClassName="on" key={index}>{translate('nav.' + subRoute.name)}</Link>
                        ))
                    }
                </span>
            </span>
        )
    }

    render() {
        // console.log(routes.childRoutes.filter(route => route.name !== 'about'))
        return (
            <nav id="nav" className={this.props.className}>
                <input type="checkbox" id="nav-switch" />

                <div className="wrapper">
                    <h1><IndexLink to="/">Super Project</IndexLink></h1>

                    <div className="navs">
                        <IndexLink to="/" activeClassName="on" className="level-1">{translate('nav.home')}</IndexLink>
                        <s className="blank"></s>
                        {routes.childRoutes.filter(route => route.name !== 'about').map(this.renderChildRounte)}
                        <s className="blank"></s>
                        <Link to="/about" activeClassName="on" className="level-1">{translate('nav.about')}</Link>
                    </div>

                    <div className="language-switch">
                        <span className="title">{translate('nav.languageSwitch')}</span>
                        <LangSwitch className="switches" />
                    </div>
                </div>

                <label htmlFor="nav-switch" className="label"></label>
            </nav>
        )
    }
}

let elNavSwitch
export const onRouterChange = () => {
    if (typeof document === 'undefined') return
    if (!elNavSwitch) elNavSwitch = document.getElementById('nav-switch')
    elNavSwitch.checked = false
}