
import React, { Component } from 'react'
import { ImportStyleRoot } from 'sp-css-import'

// 检查当前URL与路由配置路径是否相匹配，如果否，则不予渲染组件
// 通常在网络连接情况较差的情况下，容易出现不匹配的情况
export const routeCheck = (nextState) => __SERVER__ ? true : (nextState.location.pathname === location.pathname)

export default {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: '/',
            component: require('../ui/App.jsx').default,
            name: 'page-app',
            indexRoute: {
                component: require('../ui/pages/Home').default
            },
            childRoutes: [
                {
                    path: 'about',
                    name: 'about',
                    component: require('../ui/pages/About').default
                }
            ]
        }
    ]


}


@ImportStyleRoot()
class App extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}