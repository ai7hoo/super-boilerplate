import React from 'react'
import { connect } from 'react-redux'
// import classNames from 'classnames'
import { ImportStyle } from 'sp-css-import'

// import htmlHead from '@appUtils/html-head.js'

import Nav from '@ui/layout/nav'
import Main from '@ui/layout/main'

@connect(state => {
    // if (__CLIENT__) console.log('root: redux conect update', state)
    return {}
})
@ImportStyle(require('./app.less'))
class App extends React.Component {
    render() {
        return (
            <div id="app" className={this.props.className}>
                <Nav />
                <Main children={this.props.children} />
            </div>
        )
    }
}

class ErrorBoundary extends React.Component {
    componentDidCatch(error, info) {
        console.log('ERROR', error, info)
        // Display fallback UI
        // this.setState({ hasError: true })
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        return this.props.children
    }
}

export default class extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <React.StrictMode>
                    <App {...this.props} />
                </React.StrictMode>
            </ErrorBoundary>
        )
    }
}

// export default (props) => (
//     <ErrorBoundary>
//         <React.StrictMode>
//             <App {...props} />
//         </React.StrictMode>
//     </ErrorBoundary>
// )
