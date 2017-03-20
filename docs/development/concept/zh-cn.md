## 基础理念

### Webpack

#### 静态文件

在默认的 Webpack 配置结构下，只需要在 `client.dist.js` 中添加复制静态文件的相关功能即可。本例中使用 `copy-webpack-plugin` 从 `src/client/assets` 中复制 `favicon` 到 web 环境的根目录。

注：`client.dist.js` 中指定的根目录为 `dist/public/client`，而可访问的 web 环境根目录为 `dist/public`。