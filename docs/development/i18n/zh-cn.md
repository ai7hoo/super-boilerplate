## 多语言

*Super Project* 支持多语言开发，相关函数、方法、流程均位于 `sp-i18n` 组件中。

#### 语言包与客户端语言判断

语言包为标准格式的 `json` 文件，存放于 `/src/locales/` 中。

要使用语言包需要申明。在 `/src/config/i18n.js` 中修改 Array `availableLocales`，列出项目所有支持的语言。每一条项目的名称需要与语言包文件对应，只需要提供文件名，不需要扩展名，比如本例中

```js
const availableLocales = [
    'zh-cn',
    'en'
]
```

语言包名支持以下写法

* 语言-地区，如 `zh-CN` `ja-JP`
* 仅语言，如 `zh` `en`
* 支持 `-` 与 `_`
* 支持任意大小写组合

语言包申明存在**顺序**，我们会依据 Array 中的顺序进行优先匹配。以下是客户端浏览器语言与本例中的语言包申明的匹配结果

* `zh-CN,zh;q=0.8,en;q=0.6` -> `zh-cn`
* `en-US,en-GB,zh-CN,zh;q=0.6` -> `en`
* `ja,en;q=0.8,zh-CN;q=0.6,zh;q=0.4` -> `en`

本例项目语言包申明中的 `availableLocalesFb` 为针对 Facebook 抓取机器人的语言配置。

#### 翻译函数

`sp-i18n` 默认输出翻译函数 `translate(key[, replacedPair])`，该函数会返回翻译结果，如果提供的 `key` 在语言包中不存在，则直接返回 `key` 的值。

`key` 支持对象层级，如 `translate('nav.about')`。

`replacedPair` 为可选参数，如果需要动态内容支持可提供。同时语言包中的 `${key}` 会被替换为 `replacedPair[key]` 的内容。如下例

```json
// 语言包
{
    "welcome": {
        "currenttime" : "欢迎！当前时间：${time}"
    }
}
```

```jsx
// React 组件
import React from 'react'
import translate from 'sp-i18n'

export default class extends React.Component {
    render() {
        return (
            <div>
                {translate('welcome.currenttime', {
                    time: new Date()
                })}
            </div>
        )
    }
}
```

#### 强制切换

#### 行为原理

#### 未来的优化空间