import React from 'react'
import { connect } from 'react-redux'

import translate from 'sp-i18n'

import Page from '../layout/page.jsx'
import AsideItemGroup, { AsideItemGroupLink } from '../components/aside-item-group.jsx'

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
    onCollectionChange(evt) {
        if (evt.target.dataset && evt.target.dataset.collectionId)
            this.setState({
                currentCollection: evt.target.dataset.collectionId
            })
    }
    render() {
        return (
            <Page
                className={this.props.className}
                aside={<div>
                    <AsideCollections
                        onCollectionChange={this.onCollectionChange.bind(this)}
                        currentCollection={this.state.currentCollection}
                    />
                </div>}
            >
                <h2>{translate('db.title')}</h2>
            </Page>
        )
    }
}

class AsideCollections extends React.Component {
    constructor(props) {
        super(props)

        this.defaultCollections = [
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
            collections: [
                {
                    id: 'PLACEHOLDER',
                    name: 'PLACEHOLDER'
                }
            ]
        }
    }
    renderItem(thisCollection, index) {
        return (
            <AsideItemGroupLink
                href="javascript:;"
                key={thisCollection.icon || index}
                onClick={this.props.onCollectionChange}
                className={this.props.currentCollection === thisCollection.id ? 'on' : ''}
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
                {this.defaultCollections.map(this.renderItem.bind(this))}
                {this.state.collections.map(this.renderItem.bind(this))}
            </AsideItemGroup>
        )
    }
}