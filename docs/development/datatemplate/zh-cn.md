*编写中……*

* react-redux 的 `connect`
* 静态方法 `static preprocess(state, dispatch)`
  * 在该方法中派发（dispatch）一个获取数据方法的 Promise，Promise 中写入 redux dispatch
  * 该方法仅针对服务器环境，服务器渲染时会等待 Promise 执行完成后再渲染模板
* React 组件中用标准的逻辑编写客户端环境中执行的获取数据代码