const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const path = require('path')
const appPath = process.cwd()


// 执行顺序，从右到左
const rules = [{
    test: /\.json$/,
    loader: 'json-loader'
}, {
    test: /\.css$/,
    loader: 'sp-css-loader?length=4&mode=replace!postcss-loader'
}, {
    test: /\.less$/,
    loader: 'sp-css-loader?length=4&mode=replace!postcss-loader!less-loader'
}, {
    test: /\.png$/,
    loader: 'url-loader?limit=1&name=./images/[hash:5].[ext]'
}, {
    test: /\.(ico|gif|jpg|jpeg|svg|webp)$/,
    loader: 'file-loader?context=static&name=/[path][name].[ext]',
    exclude: /node_modules/
}, {
    test: /\.(js|jsx)$/,
    use: [{
        loader: 'babel-loader'
    }]
}]

// 执行顺序，
const plugins = [
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: function() {
                return [
                    // https://github.com/postcss/postcss-import
                    // postcssImport({
                    //     addDependencyTo: webpack
                    // }),
                    autoprefixer({
                        browsers: [
                            'Chrome >= 20',
                            'Edge >= 12',
                            'Firefox >= 20',
                            'ie >= 11',
                            'iOS >= 5',
                            'Android >= 2',
                            'ChromeAndroid >= 20',
                            'ExplorerMobile >= 11'
                        ]
                    })
                ]
            }
        }
    })
]

const resolve = {
    modules: [
        'node_modules',
        path.resolve(appPath, './src/modules')
    ],
    extensions: ['.js', '.jsx', '.json', '.css', '.less']
}

const needBabelHandleList = [
    'sp-base',
    'sp-boilerplate',
    'sp-css-import',
    'sp-css-loader',
    'sp-mongo',
    'sp-api',
    'sp-cors-middleware',
    'sp-react-isomorphic',
    'sp-model',
    'sp-cms',
    'sp-auth',
    'sp-koa-views',
    'sp-response',
    'sp-upload'
]

module.exports = {
    rules,
    plugins,
    resolve,
    needBabelHandleList
}