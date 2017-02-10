// import { spCms } from 'sp-cms'


export function mount(serverRouter, serverMiddleware, clientRouter, clientMiddleware) {

    //
    // sp-api
    //
    /*const apiService = new spApi(
        Object.assign({}, mongodb, {
            prefix: '/api'
        }),
        serverRouter
    )
    const collections = [
        'person',
        'banner'
    ]
    collections.forEach((collection) => {
        apiService.add(collection)
    })
    apiService.mount()*/

    //
    // sp-cms
    //
    /*const cmsService = new spCms(
        Object.assign({}, {
            ip: '127.0.0.1',
            port: '27017',
            db: 'cms_plus'
        }, {
            prefix: '/cms'
        }),
        serverRouter,
        serverMiddleware
    )
    cmsService.mount()*/

}