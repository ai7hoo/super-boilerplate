import React from 'react'
import { ImportStyleRoot } from 'sp-css-import'

import App from '../ui/App.jsx'

@ImportStyleRoot()
class AppWrapper extends React.Component {
    render() {
        return (
            <div id="app-wrapper">{this.props.children}</div>
        )
    }
}

// 检查当前URL与路由配置路径是否相匹配，如果否，则不予渲染组件
// 通常在网络连接情况较差的情况下，容易出现不匹配的情况
export const routeCheck = (nextState) => __SERVER__ ? true : (nextState.location.pathname === location.pathname)

export default {
    path: '/',
    component: AppWrapper,
    name: 'page-app',
    childRoutes: [
        {
            component: App,
            indexRoute: {
                component: require('../ui/pages/Home').default
            },
            childRoutes: [
                {
                    path: 'db',
                    name: 'db',
                    component: require('../ui/pages/db').default
                }, 
                {
                    path: 'wx',
                    name: 'wx',
                    component: require('../ui/pages/wx').default
                }, 
                {
                    path: 'task',
                    name: 'task',
                    component: require('../ui/pages/task').default
                }
            ]
        }
    ]
}