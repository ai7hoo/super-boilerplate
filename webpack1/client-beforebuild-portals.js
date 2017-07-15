const path = require('path')
const fs = require('fs-extra')

module.exports = (appPath, publicPath) => {
    const fileTemplate = path.resolve(appPath, './src/server/app-plus/views/src/template.ejs')
    const fileTarget = path.resolve(appPath, './src/server/app-plus/views/plus-index.ejs')

    let template = fs.readFileSync(fileTemplate, 'utf-8')
        .replace(/\<\%\= publicPath \%\>/g, publicPath)
        .replace(/\<\%\= SVGSymbols \%\>/g, fs.readFileSync(path.resolve(appPath, './src/server/app-plus/views/src/assets/symbols/symbol-defs.svg'), 'utf8'))

    fs.writeFileSync(
        fileTarget,
        template,
        'utf-8'
    )

}