## 基础理念

*Super-Project* 是基于 React 的客户端与服务器端同构开发框架，这就要求同一套 Javascript 代码需要同时针对客户端（浏览器）环境和服务器端环境，在开发时需格外注意。

如果有单独针对客户端（浏览器）环境或服务器端的需要，可使用全局变量 `__CLIENT__` 或 `__SERVER__` 来检查当前是否处于对应的环境下，具体用法请参见[全局变量](/development/globals)章节。

### 快速上手

请参见[快速上手指南](/development/quickstart)章节了解如何利用 *Super-Project* 框架快速上手开发。

> 你只需要告诉我去哪里杀几只就好了……

### 重要目录与文件

```
src/
 ├── html.js                        * HTML基础模板
 │
 ├── client/                        * 客户端（浏览器）UI渲染与运行时代码
 |   ├── index.js                   * 浏览器执行的代码以及服务器渲染页面时执行的代码，包括 redux reducer 定义、react-router 载入、多语言初始化等
 │   │
 |   ├── assets/                    * 静态资源
 |   ├── redux/
 │   │   └── action-types.js        * redux 动作类型定义
 |   ├── router/                    * react-router 路由定义
 |   └── ui/                        * react UI 组件
 │
 ├── config/                        * 项目配置，通常包括：站点名、可用的多语言ID等
 |   ├── site.js
 |   ├── i18n.js
 |   └── [xxx.js]
 │
 ├── features/                      * 支持热插拔的功能模块
 │
 ├── locales/                       * 语言包
 |   ├── zh-cn.json
 |   ├── en.json
 |   └── [xx-oo.json]
 │
 ├── server/                        * 服务器运行时代码
 |   └── index.js                   * 服务器启动时执行的代码，包括 router 挂载、HTML 模板定义等
 │
 └── utils/                         * Javascript功能代码/库

webpack/                            * Webpack 相关配置
 └── enter.js                       * 配置入口
```

### Webpack

*Super-Project* 使用 Webpack 同时打包客户端与服务器端代码的编译、打包。Webpack 相关配置存放于 `/webpack` 目录下，`enter.js` 为使用 Webpack 时的入口文件，会根据当前的环境、参数返回对应版本的配置信息 JSON。

##### 静态文件

我们建议将静态文件资源统一存储在 `/src` 中，使用 Webpack 在打包时将这些文件自动复制到分发结果目录中。在默认的 Webpack 配置结构下，只需要在 `client.dist.js` 中添加复制静态文件的相关功能即可。本例中使用 `copy-webpack-plugin` 从 `/src/client/assets` 中复制 `favicon` 到 web 环境的根目录。

**注:** `client.dist.js` 中指定的根目录为 `/dist/public/client`，而可访问的 web 环境根目录为 `/dist/public`。

### 项目配置

##### 服务器启动时

##### 项目启动时

### 多语言开发