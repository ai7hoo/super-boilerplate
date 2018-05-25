import React from 'react'
import { connect } from 'react-redux'
import { ImportStyle } from 'sp-css-import'

// import htmlHead from '@appUtils/html-head'

// import Page from '@appUI/containers/page'
// import CenterContainer from '@appUI/containers/center'

// import Title from '@appUI/components/title'

@connect()
@ImportStyle(require('./styles.less'))
export default class extends React.Component {
    static onServerRenderHtmlExtend({ htmlTool: ext, store }) {
        // const head = htmlHead({
        //     store,
        //     title: 'Dev (lorem ipsum)'
        // })

        // ext.metas = ext.metas.concat(head.meta)
        // ext.title = head.title
        ext.title = 'dev'
    }

    render() {
        return (
            <div className={this.props.className}>
                <h1>HOME</h1>
            </div>
        )
    }
}
