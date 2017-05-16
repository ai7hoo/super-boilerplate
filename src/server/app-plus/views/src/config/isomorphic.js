// import { getInjectionJsFilename } from 'sp-react-isomorphic'

export const distPathName = 'dist'

const fs = require('fs')
const path = require('path')
const distFiles = fs.readdirSync(path.resolve(distPathName, 'public/client/admin'))
let distJs = {}

export const getInjectionJsFilename = (name) => {
    if (!distFiles) return name + '.js'
    if (!distJs[name]) {
        distJs[name] = name + '.js'
        distFiles.forEach((f) => {
            var regexp = new RegExp(`^${name}\.([^.]+).js$`)
            if (regexp.test(f)) distJs[name] = f
        })
    }
    return distJs[name]
}

// 同构配置
export default {
    // 打包结果目标目录，如果为空默认为 /dist
    distPathName: distPathName,

    // 对HTML基础模板的自定义注入
    // 例如：<script>//inject_critical</script>  替换为 critical
    injection: {
        js: (args) => `<script src="${args.path}/admin/${getInjectionJsFilename('client')}"></script>`,
        critical: (args) => `<script src="${args.path}/admin/${getInjectionJsFilename('critical')}"></script>`
    }
}