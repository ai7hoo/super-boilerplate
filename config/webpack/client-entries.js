const path = require('path')

module.exports = (appPath, type) => {
    const isSPA = [
        'spa',
        'electron',
        'nwjs'
    ].includes(process.env.WEBPACK_BUILD_ENV)

    switch (type) {
        case 'app': {
            return {
                'critical-extra-old-ie': [
                    'babel-polyfill',
                    path.resolve(appPath, `./apps/${type}/client/critical.extra-old-ie.js`)
                ],
                critical: [
                    path.resolve(appPath, `./apps/${type}/client/critical`)
                ],
                client: [
                    isSPA
                        ? path.resolve(appPath, `./apps/${type}/client/index.spa.js`)
                        : path.resolve(appPath, `./apps/${type}/client`)
                ]
            }
        }

        default: {
            return {
                critical: [
                    path.resolve(appPath, `./apps/${type}/client/critical`)
                ],
                client: [
                    path.resolve(appPath, `./apps/${type}/client`)
                ]
            }
        }

    }
}