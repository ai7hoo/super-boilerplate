module.exports = {
    plugins: [
        // require('postcss-easing-gradients'),
        require('postcss-pxtorem')({
            rootValue: 20,
            propList: ['*'],
            selectorBlackList: [/^html$/]
        }),
        require('autoprefixer'),

        // 如要使用cssnano，请安装v4或以上版本，然后开启本配置
        // require('cssnano')({
        //     preset: ['default', {
        //         discardComments: {
        //             removeAll: true
        //         },
        //         camelCase: true
        //     }]
        // })
    ]
}