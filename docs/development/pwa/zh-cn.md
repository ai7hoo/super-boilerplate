## PWA

*PWA (Progressive Web App)* 是一项让 Web 网页变得更像本地 App 的技术，其核心是利用 *Service Worker* 管理请求和缓存。

*Super Project* 提供的 `sp-pwa` NPM包支持最基本的缓存管理。

#### 启用 PWA 支持

启用 PWA 前，需要满足以下条件：**网站支持 HTTPS 加密连接**。

满足该条件的情况下，按以下步骤即可利用 `sp-pwa` 自动管理缓存。

1. 添加注入<br>
    在 HTML 模板 `/src/html.js` 的 `<head>` 内添加 `&lt;script&gt;//inject_pwa&lt;/script&gt;`
2. 为添加 Webpack 插件
    a. 在 `/webpack/client.dist.js` 中加入模组引用 `const pwaCreatePlugin = require('sp-pwa')`
    b. 在 `plugins` ARRAY 中加入 `pwaCreatePlugin(outputPath)`，其中 `outputPath` 是输出目录，也即 `output.path`