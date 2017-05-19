import React from 'react'
import { Link } from 'react-router'

import { ImportStyle } from 'sp-css-import'
import style from './tabs-header.less'

@ImportStyle(style)
export default class TabsHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: this.props.defaultTab || this.props.default || this.props.tabs[0]
        }
    }
    onTabChange(evt) {
        const newTab = evt.target.dataset.tab
        this.setState({
            current: newTab
        })
        if (typeof this.props.onTabChange === 'function')
            this.props.onTabChange(newTab)
    }
    renderTab(tab, index) {
        return (
            <a
                href="javascript:;"
                key={index}
                onClick={this.onTabChange.bind(this)}
                data-tab={tab}
                className={this.state.current === tab ? 'on' : ''}
            >
                {tab}
            </a>
        )
    }
    render() {
        return (
            <div className={this.props.className}>
                {this.props.tabs.map(this.renderTab.bind(this))}
            </div>
        )
    }
}