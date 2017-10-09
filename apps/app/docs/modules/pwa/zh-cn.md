## sp-pwa

提供 PWA (Progressive Web App) 相关的方法。

#### 添加 Webpack 插件

本模组的核心功能。

```js
// /webpack/client.dist.js

const pwaCreatePlugin = require('sp-pwa')

// ...
// plugins: [
    pwaCreatePlugin(outputPath)
    // 或
    pwaCreatePlugin(settings)
// ]
// ...
```

**参数**

`pwaCreatePlugin(outputPath)`

`outputPath`

必填，string - 项目打包目录。

`pwaCreatePlugin(settings)`

`settings`

必填，object - 参数对象，内容有：

* `outputPath`<br>
    必填，string - 项目打包目录
* `serviceWorkerPath`<br>
    string - 自定义 service worker 文件地址。若不提则供将采用本模组的默认文件。
* `globPattern`<br>
    string || array - 自定义缓存文件列表，采用 glob 格式，格式文档详见[glob](https://www.npmjs.com/package/glob)。会覆盖默认的文件列表。若不提供则将采用本模组的默认文件列表。
* `globOptions`<br>
    object - 自定义 glob 规则设置。若不提供则将采用 glob 默认设置。
* `appendUrls`<br>
    array - 追加缓存文件或URL列表。上述的 `globPattern` 仅为从硬盘中获取文件，而该参数可以任意添加 URL。默认为空。