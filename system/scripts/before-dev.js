const fs = require('fs-extra')
const path = require('path')

fs.ensureFileSync(path.resolve(
    process.cwd(),
    'dist/server/index.js'
))