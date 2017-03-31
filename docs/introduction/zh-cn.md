## Super Project

*Super-Project* 是基于 React 的客户端与服务器端同构开发框架，基于 react-koa-sbase 构建。

本项目既是该框架的开发文档，同时也是一个实例。

#### 什么是 React 同构？

React 同构技术是指利用 React 框架开发，其代码同时用于服务器渲染 HTML 和客户端（浏览器）执行。

#### 为什么使用同构技术？

React 同构技术主要是为了解决以下 React 框架的问题而存在：

* **启用HTML5路由跳转的URL刷新/访问**
    启用HTML5路由跳转后，页面都会位于看似正式的URL地址下，如 `/posts/65535` `/user/diablohu`。但如果用户在这些地址下刷新页面或者直接访问这些地址，如果没有服务器的支持，会造成404等问题。React 同构技术包含一套服务器系统，会响应这些地址的访问，并利用和客户端同样的 React 代码渲染页面并返回结果到用户的浏览器。

* **HTML渲染与搜索引擎收录**
    这一问题由上一个问题引申而来。我们可以利用其他的服务器技术，如服务器跳转来解决上一条问题。但由于没有渲染HTML结果，不便于搜索引擎的收录。React 同构技术由于会输出完整的HTML结果，所以可以被搜索引擎正常的收录。

#### Static assets test

###### GIF test

![GIF test](samples/tenor.gif "GIF test")

###### JPEG test

![JPEG test](samples/Siraha_50122263_p1.jpg "JPEG test")

###### SVG test

![SVG test](samples/the-web-icon-negative.svg "SVG test")