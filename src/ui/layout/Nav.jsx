import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

import translate from 'sp-i18n'
import routes from '../../router'

import { ImportStyle } from 'sp-css-import'
import style from './Nav.less'

// @connect(mapStateToProps, mapDispatchToProps)
@ImportStyle(style)
export default class extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object
    }

    render() {
        // console.log(routes.childRoutes.filter(route => route.name !== 'about'))
        return (
            <nav id="nav" className={this.props.className}>
                <h1><IndexLink to="/">Super Project</IndexLink></h1>

                <div className="navs">
                    <IndexLink to="/" activeClassName="on">{translate('nav.home')}</IndexLink>
                    <s className="blank"></s>
                    {
                        routes.childRoutes.filter(route => route.name !== 'about').map((route, index) => (
                            <Link to={route.path} activeClassName="on" key={index}>{translate('nav.' + route.name)}</Link>
                        ))
                    }
                    <s className="blank"></s>
                    <Link to="/about" activeClassName="on">{translate('nav.about')}</Link>
                </div>
            </nav>
        )
    }
}