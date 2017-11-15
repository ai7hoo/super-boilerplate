module.exports = (async() => ({
    /* 

    配置例子：

    'app': {  // app key , js pack name & folder name

        // 
        domain: require('../../apps/app/config/site').domain,
        server: require('../../apps/app/server'),

        //
        webpack: {
            client: {
                entry: {
                    'critical-extra-old-ie': [
                        'babel-polyfill',
                        '../../apps/app/client/critical.extra-old-ie.js'
                    ],
                    critical: [
                        '../../apps/app/client/critical.js'
                    ],
                    client: [
                        '../../apps/app/client/index.js'
                        // '../../apps/app/client/index.spa.js'
                    ]
                },
                output: {

                },
                plugins: {

                }
            }
        }
    }
    */

    // doc: require('./doc'),
    // app: require('./app'),
    api: {
        // domain: 'api.test.com',
        domain: 'localhost',
        server: global.NOT_WEBPACK_RUN ? require('../../apps/api/index') : ''
    },
    // www: {
    //     domain: 'localhost',
    //     server: global.NOT_WEBPACK_RUN ? require('../../apps/www/index') : ''
    // }
}))()