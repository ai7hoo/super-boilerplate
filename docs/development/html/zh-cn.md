## HTML基础模板

所有的 React 渲染都会基于 **HTML基础模板** 处理，该模板位于 `/src/html.js`

#### div#root

所有的 React 模板都会渲染到 `div#root` 中，通常情况下没有修改该元素的需要。

#### 注入 / injection

在模板中存在许多 `&lt;script&gt;//inject_title&lt;/script&gt;` `&lt;script&gt;//inject_js&lt;/script&gt;` 之类的代码，我们定义这些内容为 **注入**，在服务器端渲染HTML结果时，这些内容会被替换。

在项目开发中可以自定义注入内容，只需要在 HTML 基础模板中加入 `&lt;script&gt;//inject_注入ID&lt;/script&gt;`，并在 `/src/server/index.js` 中编写对应的注入方法。

在默认设定下，以下注入会被自动替换：

* component_styles
* html
* redux_state
* js

以下内容可通过 React 组件的静态方法进行替换，具体用法请参见[React组件静态方法](/components/static)章节。

* title
* meta

##### 自定义注入方法

自定义注入方法需要在 `/src/server/index.js` 中进行定义，在 `isomorphicOptions` 对象的 `injection` 属性中添加对应的方法函数。该函数返回的字符串会被用以替换 HTML 基础模板中对应的内容。

```js
function(args) {
    var result = "replaced string"

    // 自定义注入方法

    return result
}
```

**参数 {object} args**

* `args.path`: 打包结果所在的可访问的 web 地址目录

在本例中存在名为 `critical` 的自定义注入方法可供参考。