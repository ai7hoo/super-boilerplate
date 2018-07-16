import React from 'react'
import { connect } from 'react-redux'
import { ImportStyle } from 'sp-css-import'
import { pageinfo } from 'super-project'

import { updateTs, resetTs } from '@api/test'

let lastTs

@connect(state => ({
    ts: state.test.ts
}))
@pageinfo((state/*, renderProps*/) => ({
    title: __('pages.data.title'),
    metas: [
        { 'description': 'Super Project (dev)' },
        { 'super-locale-id': state.localeId },
    ]
}))
@ImportStyle(require('./styles.less'))
export default class extends React.Component {
    static onServerRenderStoreExtend({ store/*, renderProps*/ }) {
        return store.dispatch(updateTs())
    }

    state = {
        loaded: typeof this.props.ts !== 'undefined',
    }
    mounted = false

    componentDidMount() {
        this.mounted = true
        if (!this.state.loaded) {
            this.props.dispatch(updateTs())
                .then(() => {
                    if (!this.mounted) return
                    this.setState({
                        loaded: true,
                    })
                })
        }
    }

    componentWillUnmount() {
        lastTs = this.props.ts
        this.mounted = false
        this.props.dispatch(resetTs())
    }

    render() {
        if (!this.state.loaded)
            return (
                <div className={this.props.className}>
                    LOADING...
                </div>
            )
        return (
            <div className={this.props.className}>
                <h2>{__('pages.data.title')}</h2>
                <p>Last Timestamp: {lastTs || 'initial visit'}</p>
                <p>Current Timestamp: {this.props.ts}</p>
            </div>
        )
    }
}
