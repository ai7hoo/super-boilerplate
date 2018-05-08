module.exports = {
    module: {
        rules: [{
            test: /\.(ico|gif|jpg|jpeg|png|svg|webp)$/,
            loader: 'file-loader?context=static&name=assets/[hash:32].[ext]',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: `[name].[chunkhash].js`
    }
}