import React from 'react'
import { match } from 'react-router'

import { ImportStyle } from 'sp-css-import'
import style from './PageContainer.less'

import { isAppReady } from '../App.jsx'

const combineClassName = (...args) => {
    let classNames = []
    args.forEach(arg => {
        arg = arg || ''
        classNames = classNames.concat(arg.split(' ').filter(item => !(!item)))
    })
    return classNames.join(' ')
}

@ImportStyle(style)
export default class extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object,
        store: React.PropTypes.object
    }

    renderMain() {
        if (this.props.isLoading) {
            // gaSetHalt(true)
            return (<div className="loading" id="main-body">Loading...</div>)
        } else {
            console.log(isAppReady)
            if (__CLIENT__ && isAppReady) {
                if (this.context.router && this.context.store) {
                    match({
                        routes: this.context.router.routes,
                        location: this.context.router.location
                    }, (error, redirectLocation, renderProps) => {
                        for (let component of renderProps.components) {
                            if (component && component.WrappedComponent && component.WrappedComponent.htmlExtends) {
                                // console.log(component.WrappedComponent.htmlExtends)
                                component.WrappedComponent.htmlExtends(
                                    {
                                        meta: []
                                    }, {
                                        getState: () => this.context.store.getState()
                                    }
                                )
                            }
                        }
                    })
                }
            }

            // if (gaHalt) {
            //     setTimeout(() => {
            //         gaSetHalt(false)
            //         pageview()
            //     }, 0)
            // }

            return (
                <div id="main-body">
                    {this.props.children}
                </div>
            )
        }
    }

    render() {
        // console.log('reander')
        return (
            <div className={combineClassName(
                this.props.className,

                this.props.isLoading ? 'is-loading' : '',
                this.props.isReady ? 'is-ready' : '',
                this.props.isError ? 'is-error' : ''
            )}>
                {this.renderMain()}
            </div>
        )
    }
}