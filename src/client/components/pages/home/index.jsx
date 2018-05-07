import React from 'react'
// import { connect } from 'react-redux'
import { getRepos } from '../../../redux/feature-1/actions'

import { ImportStyle } from 'sp-css-import'
// import translate from 'sp-i18n'

// import htmlHead from '@appUtils/html-head.js'

// import Page from '@appUI/containers/page'

// import Title from '@appUI/components/title'
// const mapStateToProps = (state, props) => ({
//     feature1: state.feature1
// })

// @connect(mapStateToProps)
@ImportStyle(require('./index.less'))
export default class Home extends React.Component {

    render() {

        // console.log(this.props)

        return (
            <div className={this.props.className}>
                Home 123

                Lang: {__('page.home.title')}

                <button onClick={this.handleClick}>Get Github Repos</button>

                <ul>
                    {this.props.feature1.repos.map(repos => <li>{repos.name}</li>)}
                </ul>
            </div>
        )
    }

    handleClick = () => {
        // alert(1)
        this.props.dispatch(getRepos())
    }
}

// const Home = (props) => {

//     const handleClick = () => {
//         props.dispatch(getRepos())
//     }

//     return (
//         <div>
//             Home 123
//             <button onClick={handleClick}>Get Github Repos</button>
//             <ul>
//                 {props.feature1.repos.map(repos => <li>{repos.name}</li>)}
//             </ul>
//         </div>
//     )
// }

// export default Home