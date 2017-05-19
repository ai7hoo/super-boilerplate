import React from 'react'
import { connect } from 'react-redux'

import translate from 'sp-i18n'

import Page from '../layout/page.jsx'
import AsideItemGroup, { AsideItemGroupLink } from '../components/aside-item-group.jsx'
import TabsHeader from '../components/tabs-header.jsx'

import { ImportStyle } from 'sp-css-import'
import style from './db.less'

@connect()
@ImportStyle(style)
export default class PageDatabase extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentCollection: '__FILES'
        }
    }

    onCollectionChange(newCollectionId) {
        this.setState({
            currentCollection: newCollectionId
        })
    }

    render() {
        return (
            <Page
                className={this.props.className}
                aside={<div>
                    <AsideCollections
                        onCollectionChange={this.onCollectionChange.bind(this)}
                    />
                </div>}
            >
                <MainThisCollection
                    collection={this.state.currentCollection}
                    key={this.state.currentCollection}
                />
            </Page>
        )
    }
}

class AsideCollections extends React.Component {
    constructor(props) {
        super(props)

        this.spCollections = [
            {
                id: '__FILES',
                icon: 'files-empty',
                name: translate('db.collection.files')
            },
            {
                id: '__USERS',
                icon: 'users',
                name: translate('db.collection.users')
            },
            {
                id: '__TOKENS',
                icon: 'key',
                name: translate('db.collection.tokens')
            }
        ]

        this.state = {
            current: this.props.defaultCollection || this.props.default || this.spCollections[0].id,
            collections: [
                {
                    id: 'PLACEHOLDER',
                    name: 'PLACEHOLDER'
                }
            ]
        }
    }
    onCollectionChange(evt) {
        const newCollectionId = evt.target.dataset.collectionId
        this.setState({
            current: newCollectionId
        })
        if (typeof this.props.onCollectionChange === 'function')
            this.props.onCollectionChange(newCollectionId)
    }
    renderItem(thisCollection, index) {
        return (
            <AsideItemGroupLink
                href="javascript:;"
                key={thisCollection.icon || index}
                onClick={this.onCollectionChange.bind(this)}
                className={this.state.current === thisCollection.id ? 'on' : ''}
                icon={thisCollection.icon}
                data-collection-id={thisCollection.id}
            >
                {thisCollection.name}
            </AsideItemGroupLink>
        )
    }
    render() {
        return (
            <AsideItemGroup title={translate('db.collections')}>
                {this.spCollections.map(this.renderItem.bind(this))}
                {this.state.collections.map(this.renderItem.bind(this))}
            </AsideItemGroup>
        )
    }
}

class MainThisCollection extends React.Component {
    constructor(props) {
        super(props)

        this.tabs = [
            translate('db.columns'),
            translate('db.relations'),
            translate('db.api')
        ]

        this.state = {
            currentTab: this.tabs[0]
        }
    }

    onTabChange(newTab) {
        this.setState({
            currentTab: newTab
        })
    }

    render() {
        return (
            <div data-collection-id={this.props.collection}>
                <TabsHeader
                    tabs={this.tabs}
                    onTabChange={this.onTabChange.bind(this)}
                    defaultTab={this.tabs[0]}
                />
                <h2>Collection: {this.props.collection}</h2>
                <h3>Tab: {this.state.currentTab}</h3>
            </div>
        )
    }
}