const path = require('path')
const config = require('../../config/webpack')

module.exports = (appPath, type) => {
    const isSPA = process.env.WEBPACK_BUILD_ENV === 'spa'

    switch (type) {
        /*case 'portals':
            return {
                critical: [
                    path.resolve(appPath, './src/server/app-plus/views/src/critical')
                ],
                client: [
                    path.resolve(appPath, './src/server/app-plus/views/src/client')
                ]
            }*/

        case 'app': {
            return {
                "critical-extra-old-ie": [
                    "babel-polyfill",
                    path.resolve(appPath, `./src/apps/${type}/client/critical.extra-old-ie.js`)
                ],
                critical: [
                    path.resolve(appPath, `./src/apps/${type}/client/critical`)
                ],
                client: [
                    isSPA
                        ? path.resolve(appPath, `./src/apps/${type}/client/index.spa.js`)
                        : path.resolve(appPath, `./src/apps/${type}/client`)
                ]
            }
        }

        default: {
            let entryFiles = {}
            entryFiles[config.APP_1_ENTER_JS_NAME] = [path.resolve(appPath, './src/apps/react/client')]
            return entryFiles
        }

    }
}