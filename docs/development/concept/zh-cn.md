## 基础理念

*Super-Project* 是基于 React 的客户端与服务器端同构开发框架，这就要求同一套 Javascript 代码需要同时针对客户端（浏览器）环境和服务器端环境，在开发时需格外注意。

如果有单独针对客户端（浏览器）环境或服务器端的需要，可使用全局变量 `__CLIENT__` 或 `__SERVER__` 来检查当前是否处于对应的环境下，具体用法请参见[全局变量](/development/globals)章节。

### 重要目录与文件

### Webpack

*Super-Project* 使用 Webpack 同时打包客户端与服务器端代码的编译、打包。Webpack 相关配置存放于 `/webpack` 目录下，`enter.js` 为使用 Webpack 时的入口文件，会根据当前的环境、参数返回对应版本的配置信息 JSON。

##### 静态文件

我们建议将静态文件资源统一存储在 `/src` 中，使用 Webpack 在打包时将这些文件自动复制到分发结果目录中。在默认的 Webpack 配置结构下，只需要在 `client.dist.js` 中添加复制静态文件的相关功能即可。本例中使用 `copy-webpack-plugin` 从 `/src/client/assets` 中复制 `favicon` 到 web 环境的根目录。

注：`client.dist.js` 中指定的根目录为 `/dist/public/client`，而可访问的 web 环境根目录为 `/dist/public`。

### 项目配置

##### 服务器启动时

##### 项目启动时

### 多语言开发