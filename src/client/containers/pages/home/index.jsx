import React from 'react'
import { connect } from 'react-redux'
import Home from '../../../components/pages/home'

const mapStateToProps = (state) => ({
    feature1: state.feature1
})

@connect(mapStateToProps)
export default class extends React.Component {
    static onServerRenderHtmlExtend({ext, store}) {
        // const head = htmlHead({
        //     store,
        //     title: translate('nav.about')
        // })

        // ext.metas = ext.metas.concat(head.meta)
        // ext.title = head.title
    }

    render() {
        return (
            <Home {...this.props} />
        )
    }
}