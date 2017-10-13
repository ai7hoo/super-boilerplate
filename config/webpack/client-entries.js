const path = require('path')

module.exports = (appPath, app) => {
    const isSPA = [
        'spa',
        'electron',
        'nwjs'
    ].includes(process.env.WEBPACK_BUILD_ENV)

    switch (app) {
        case 'app': {
            return {
                'critical-extra-old-ie': [
                    'babel-polyfill',
                    path.resolve(appPath, `./apps/${app}/client/critical.extra-old-ie.js`)
                ],
                critical: [
                    path.resolve(appPath, `./apps/${app}/client/critical`)
                ],
                client: [
                    isSPA
                        ? path.resolve(appPath, `./apps/${app}/client/index.spa.js`)
                        : path.resolve(appPath, `./apps/${app}/client`)
                ]
            }
        }

        default: {
            return {
                critical: [
                    path.resolve(appPath, `./apps/${app}/client/critical`)
                ],
                client: [
                    path.resolve(appPath, `./apps/${app}/client`)
                ]
            }
        }

    }
}