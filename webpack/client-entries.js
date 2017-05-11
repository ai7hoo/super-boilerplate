const path = require('path')

module.exports = (appPath, type) => {
    switch (type) {
        case 'admin':
            return {
                critical: [
                    path.resolve(appPath, './src/features/_client/critical')
                ],
                client: [
                    path.resolve(appPath, './src/features/_client')
                ]
            }
        default:
            return {
                "critical-extra-old-ie": [
                    "babel-polyfill",
                    path.resolve(appPath, './src/client/critical.extra-old-ie.js')
                ],
                critical: [
                    path.resolve(appPath, './src/client/critical')
                ],
                client: [
                    path.resolve(appPath, './src/client')
                ]
            }
    }
}