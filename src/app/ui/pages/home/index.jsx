import React from 'react'
import { connect } from 'react-redux'
import { ImportStyle } from 'sp-css-import'
import { pageinfo } from 'super-project'

@connect()
@pageinfo((state/*, renderProps*/) => ({
    title: __('welcome'),
    metas: [
        { 'description': 'Super Project' },
        { 'super-locale-id': state.localeId },
    ]
}))
@ImportStyle(require('./styles.less'))
export default class extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <h1>HOME</h1>
                <p>{__('welcome')}</p>
            </div>
        )
    }
}
