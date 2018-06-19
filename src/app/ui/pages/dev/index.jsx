import React from 'react'
import { connect } from 'react-redux'
import { ImportStyle } from 'sp-css-import'
import { pageinfo } from 'super-project'

@connect()
@pageinfo((state/*, renderProps*/) => ({
    title: __('dev'),
    metas: [
        { 'description': 'Super Project (dev)' },
        { 'super-locale-id': state.localeId },
    ]
}))
@ImportStyle(require('./styles.less'))
export default class extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <h2>SVG测试</h2>
                <img className="svg-sample" src={require('@assets/terminal.svg')} width="32" height="32" />
                <img className="svg-sample" src={require('@assets/terminal.svg')} width="64" height="64" />
            </div>
        )
    }
}
