const path = require('path')

module.exports = (appPath, appKey) => {
    const isSPA = [
        'spa',
        'electron',
        'nwjs'
    ].includes(process.env.WEBPACK_BUILD_ENV)

    switch (appKey) {
        case 'app': {
            return {
                'critical-extra-old-ie': [
                    'babel-polyfill',
                    path.resolve(appPath, `./apps/${appKey}/client/critical.extra-old-ie.js`)
                ],
                critical: [
                    path.resolve(appPath, `./apps/${appKey}/client/critical`)
                ],
                client: [
                    isSPA
                        ? path.resolve(appPath, `./apps/${appKey}/client/index.spa.js`)
                        : path.resolve(appPath, `./apps/${appKey}/client`)
                ]
            }
        }

        default: {
            return {
                critical: [
                    path.resolve(appPath, `./apps/${appKey}/client/critical`)
                ],
                client: [
                    path.resolve(appPath, `./apps/${appKey}/client`)
                ]
            }
        }

    }
}