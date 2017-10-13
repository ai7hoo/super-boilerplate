const fs = require('fs-extra')
const path = require('path')
const appPath = process.cwd()
const common = require('../system/webpack/common')

const run = async () => {
    await fs.remove(
        path.resolve(appPath, common.outputPath)
    )
}

run()