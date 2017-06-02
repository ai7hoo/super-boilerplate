module.exports = {
    plugins: [
        require('postcss-pxtorem')({
            rootValue: 20,
            propList: ['*'],
            selectorBlackList: [/^html$/]
        }),
        require('autoprefixer'),
        require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true
                },
                camelCase: true
            }]
        })
    ]
}