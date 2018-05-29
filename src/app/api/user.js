import {
    USER_LOGIN,
} from '@redux/action-types'




/**************************************
 * Redux actions
 *************************************/

// TODO: promise login
export const login = (data) => dispatch => dispatch({
    type: USER_LOGIN,
    data,
})

// // 创建配置
// export const newBuild = (isRedirect) => dispatch => initNedb()
//     // 新建一条数据
//     .then(() => new Promise((resolve, reject) => {
//         db.insert(defaults, (err, newDoc) => {   // Callback is optional
//             if (err) return reject(err)
//             resolve(newDoc)
//         });
//     }))
//     // 
//     .then(newDoc => {
//         dispatch({
//             type: FLEETS_NEW_BUILD,
//             data: newDoc,
//         })
//         if (isRedirect) {
//             routerPush(getBuildUrl(newDoc))
//         }
//         return newDoc
//     })

// // 开始编辑配置
// export const editBuild = (build, isRedirect) => dispatch => initNedb()
//     .then(() => {
//         build = Object.assign({}, defaults, build)
//         dispatch({
//             type: FLEETS_NEW_BUILD,
//             data: build,
//         })
//         if (isRedirect) {
//             routerPush(getBuildUrl(build))
//         }
//         return build
//     })
