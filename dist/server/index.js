/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/ 		// array of [resolve, reject, promise] means "currently loading"
/******/ 		if(installedChunks[chunkId])
/******/ 			return installedChunks[chunkId][2];
/******/ 		// load the chunk and return promise to it
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 			var filename = __dirname + "/" + chunkId + ".chunk.js";
/******/ 			require('fs').readFile(filename, 'utf-8',  function(err, content) {
/******/ 				if(err) return reject(err);
/******/ 				var chunk = {};
/******/ 				require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 				var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 				for(var moduleId in moreModules) {
/******/ 					modules[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 				var callbacks = [];
/******/ 				for(var i = 0; i < chunkIds.length; i++) {
/******/ 					if(installedChunks[chunkIds[i]])
/******/ 						callbacks = callbacks.concat(installedChunks[chunkIds[i]][0]);
/******/ 					installedChunks[chunkIds[i]] = 0;
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++)
/******/ 					callbacks[i]();
/******/ 			});
/******/ 		});
/******/ 		return installedChunks[chunkId][2] = promise;
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/server/";

/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("koa-convert");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("react-router-redux");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("react-redux");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("redux");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_koa_sbase_server__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client__ = __webpack_require__(22);




// koa middleware
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_koa_sbase_server__["a" /* commonMiddlewares */])(__WEBPACK_IMPORTED_MODULE_0_react_koa_sbase_server__["b" /* middleware */]);

var isomorphic = __webpack_require__(29);
var configureStore = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__client__["a" /* createConfigureStore */])();
__WEBPACK_IMPORTED_MODULE_0_react_koa_sbase_server__["b" /* middleware */].use(isomorphic(__WEBPACK_IMPORTED_MODULE_1__client__["b" /* router */].get(), configureStore));

var convert = __webpack_require__(0);
var koaStatic = __webpack_require__(41);
__WEBPACK_IMPORTED_MODULE_0_react_koa_sbase_server__["b" /* middleware */].use(convert(koaStatic(process.cwd() + '/dist/public')));

//
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_koa_sbase_server__["c" /* run */])();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony export (immutable) */ exports["a"] = factoryConfigureStore;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


// import thunk from 'redux-thunk'
// import rootReducer from './rootReducer'
// import { browserHistory } from 'react-router'
// import { routerMiddleware } from 'react-router-redux'


// const middlewares = [
//     thunk,
//     routerMiddleware(browserHistory)
// ]

var devToolsExtension = function devToolsExtension(f) {
    return f;
};

if (false) {
    if (window.devToolsExtension) {
        devToolsExtension = window.devToolsExtension();
    }
}

// export default function configStore(initialState) {

//     const store = createStore(rootReducer, initialState, compose(
//         applyMiddleware(...middlewares),
//         devToolsExtension
//     ))

//     return store
// }

function factoryConfigureStore(reducers) {
    var middlewares = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


    return function (initialState) {
        var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducers, initialState, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, _toConsumableArray(middlewares)), devToolsExtension));

        return store;
    };
}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__middleware__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configureStore__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return redux; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return createConfigureStore; });
/* unused harmony export run */


// import thunk from 'redux-thunk'









/*
import { redux, router, run } from 'superproject/client'
client.redux.use() redux中间件
client.redux.reducer.use() redux的reducer挂载
client.router.use() react-router挂载
client.run()
*/

var redux = {
    use: function use(middleware) {
        __WEBPACK_IMPORTED_MODULE_7__middleware__["a" /* add */](middleware);
    },

    reducer: {
        use: function use(name, reducer) {
            __WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* add */](name, reducer);
        }
    }
};

var router = {
    use: function use(router) {
        __WEBPACK_IMPORTED_MODULE_6__router__["a" /* add */](router);
    },
    get: function get() {
        return __WEBPACK_IMPORTED_MODULE_6__router__["b" /* get */]();
    }
};

var createConfigureStore = function createConfigureStore() {
    var reducers = __WEBPACK_IMPORTED_MODULE_5__reducer__["b" /* get */]();
    var middlewares = __WEBPACK_IMPORTED_MODULE_7__middleware__["b" /* get */]();
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__configureStore__["a" /* factoryConfigureStore */])(reducers, middlewares);
};

// export const configureStore = createConfigureStore()

var run = function run() {

    // redux
    // const reducers = rootReducer.get()
    // const middlewares = reduxMiddleware.get()
    // const configureStore = factoryConfigureStore(reducers, middlewares)
    var configureStore = createConfigureStore();
    var store = configureStore(window.__REDUX_STATE__);

    // 默认添加的redux中间件
    // redux.use(thunk)
    // redux.use(routerMiddleware(browserHistory))


    // react-router
    var routes = __WEBPACK_IMPORTED_MODULE_6__router__["b" /* get */]();
    // 用react-router-redux增强history
    var history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__["syncHistoryWithStore"])(__WEBPACK_IMPORTED_MODULE_2_react_router__["browserHistory"], store);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router__["match"])({ history: history, routes: routes }, function (err, redirectLocation, renderProps) {

        if (err) {
            console.log(err.stack);
        }

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"],
            { store: store },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_router__["Router"],
                { history: history },
                routes
            )
        ), document.getElementById('root'));
    });
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export init */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return get; });

var middlewares = null;

var init = function init() {
    if (!middlewares) middlewares = [];
    return middlewares;
};

var add = function add(middleware) {
    init();
    middlewares.push(middleware);
};

var get = function get() {
    return middlewares;
};

// const middlewares = [
//     thunk,
//     routerMiddleware(browserHistory)
// ]

// let devToolsExtension = (f) => f

// if (__CLIENT__) {
//     if (window.devToolsExtension) {
//         devToolsExtension = window.devToolsExtension()
//     }
// }

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* unused harmony export init */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return get; });


var rootReducer = null;

var init = function init() {
    if (!rootReducer) rootReducer = {};
    return rootReducer;
};

var add = function add(name, reducer) {
    init();

    var extendReducer = {};
    extendReducer[name] = reducer;

    Object.assign(rootReducer, extendReducer);
    return rootReducer;
};

var get = function get() {
    // if (!rootReducer) return null
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(rootReducer);
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* unused harmony export init */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return get; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var rootRouter = null;

var init = function init() {

    if (!rootRouter) {
        rootRouter = {
            path: '/',
            component: App,
            childRoutes: []
        };
    }

    return rootRouter;
};

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var add = function add(router) {
    init();
    rootRouter.childRoutes.push(router);
};

var get = function get() {
    var routes = [rootRouter];
    routes.forEach(handleIndexRoute);
    return routes;
};

// 处理默认路由

// Handle isIndex property of route config:
//  1. remove the first child with isIndex=true from childRoutes
//  2. assign it to the indexRoute property of the parent.
function handleIndexRoute(route) {
    if (!route.childRoutes || !route.childRoutes.length) {
        return;
    }

    route.childRoutes = route.childRoutes.filter(function (child) {
        // eslint-disable-line
        if (child.isIndex) {

            /* istanbul ignore next */
            if (process.env.NODE_ENV === 'dev' && route.indexRoute) {
                console.error('More than one index route: ', route);
            }

            /* istanbul ignore else */
            if (!route.indexRoute) {
                delete child.path; // eslint-disable-line
                route.indexRoute = child; // eslint-disable-line
                return false;
            }
        }
        return true;
    });

    route.childRoutes.forEach(handleIndexRoute);
}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

// import path from 'path'
// import { servers /*, clients*/ } from '../../config/mounting'
// import factoryRootReducer from '../client/roots/factoryRootReducer'
// import factoryConfigureStore from '../client/roots/factoryConfigureStore'
// import clientRootRouter from '../client/roots/router'
// import { createConfigureStore } from '../common'

// 自定义对原生JS对象的扩展
// require('../ext')

// 异步方法支持
__webpack_require__(31);

// 导入全局配置和方法、枚举
// require('../../config')

// 创建Koa应用
var Koa = __webpack_require__(34);
var app = new Koa();

/*
// 加载各种中间件
require('./middlewares/common')(app)

// 挂载服务端路由规则
app.use((require('./routes')(servers)).routes())

// 读取html用的模板文件路径
let htmlFilename = path.resolve(global.spConfig.RUN_PATH, './index.html')
if (!__DEV__) {
    htmlFilename = path.resolve(global.spConfig.RUN_PATH, './dist/index.html')
}

app.use(require('./middlewares/common/isomorphic-react-redux')(clientRootRouter, createConfigureStore, htmlFilename))

*/
// 统一的异常错误捕获，主要是解决未知异常
app.on('error', function (err, ctx) {
    console.log('SERVER_UNHANDLE_ERROR :', err, ctx);
});

module.exports = app;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35)();

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var compress = __webpack_require__(36);
module.exports = compress();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var convert = __webpack_require__(0);
var minify = __webpack_require__(37)({
    collapseWhitespace: true
});
module.exports = convert(minify);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

module.exports = function (app) {

    // require('./onerror')(app)

    // option.staticPaths
    // option.reactRoutes
    // option.configStore

    app.use(__webpack_require__(18));
    // app.use(require('./logger'))
    app.use(__webpack_require__(19));
    app.use(__webpack_require__(13));
    app.use(__webpack_require__(17));
    // app.use(require('./static-folder')(global.spConfig.APP.STATIC_PATH[0]))
    // app.use(require('./static-folder')(global.spConfig.APP.STATIC_PATH[1]))
    app.use(__webpack_require__(14));
    app.use(__webpack_require__(15)); // 依赖于compress，必须在其中间件下面

    // app.use(require('./isomorphic-react-redux')(clientRouter))
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

// https://www.npmjs.com/package/koa-json
// http 的 response 可以是 json

var convert = __webpack_require__(0);
var json = __webpack_require__(38);

module.exports = convert(json());

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var convert = __webpack_require__(0);
module.exports = convert(__webpack_require__(40)());

/***/ },
/* 19 */
/***/ function(module, exports) {

// Generated by CoffeeScript 1.10.0
var EXPIRES, KEY, cache, handler, session;

KEY = 's_id';

EXPIRES = 1000 * 60 * 20;

cache = null;

session = {
    __nowTime: function __nowTime() {
        return new Date().getTime();
    },
    __uuid: function __uuid() {
        return this.__nowTime() + Math.random();
    },
    init: function init() {
        if (!cache) {
            return cache = {};
        }
    },
    get: function get(id) {
        return cache[id];
    },
    create: function create(opt) {
        var expire, id, ip, s;
        if (opt == null) {
            opt = {};
        }
        id = this.__uuid();
        ip = opt.ip;
        expire = this.__nowTime() + EXPIRES;
        s = {
            id: id,
            ip: ip,
            cookie: {
                expire: expire
            }
        };
        return cache[s.id] = s;
    },
    'delete': function _delete(id) {
        return delete cache[id];
    },
    expireUpdate: function expireUpdate(id) {
        if (cache[id]) {
            return cache[id].cookie.expire = this.__nowTime() + EXPIRES;
        }
    }
};

handler = function handler(ctx, next) {
    var generate, s, sid;
    session.init();
    generate = function generate(ctx) {
        var s;
        s = session.create();
        ctx.cookies.set(KEY, s.id);
        return ctx.session = s;
    };
    sid = ctx.cookies.get(KEY);
    if (sid) {
        s = session.get(sid);
        if (s) {
            if (s.cookie.expire > session.__nowTime()) {
                session.expireUpdate(sid);
                ctx.session = s;
            } else {
                generate(ctx);
            }
        } else {
            generate(ctx);
        }
    } else {
        generate(ctx);
    }
    return next();
};

module.exports = handler;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return middleware; });
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return commonMiddlewares; });
/*
import { middleware, router, run } from 'superproject/server'
server.middleware.use() koa-middleware中间件
server.router.use() koa-router挂载
server.run()
*/

var createServer = __webpack_require__(21);
var app = __webpack_require__(12);

var middleware = {
    use: function use(koaMiddleware) {
        app.use(koaMiddleware);
    }
};

var router = {
    use: function use(koaRouter) {
        app.use(koaRouter.routes());
    }
};

var run = function run() {
    createServer(app).listen(3000);
};

var commonMiddlewares = __webpack_require__(16);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {


// 处理es6\es7
__webpack_require__(30);

// 前后端同构使用统一的fetch数据方式
__webpack_require__(33);

// 注册 koa 应用相关逻辑`
// const app = require('./app')


/*
 * 创建一个被扩展的http服务
 *
 * @param {any} extApp 一个被扩展的koa应用实例
 * @returns http服务
 */
var createServer = function createServer(app) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { port: 3000 };


    // 获取logger实例
    var log4js = __webpack_require__(39);
    var logger = log4js.getLogger('startup');

    // 用于 apps/ 下的子项目扩展koa app，如增加中间件或者方法
    // extApp && extApp(app)

    // koa 应用逻辑注册到 http 服务中
    var http = __webpack_require__(32);
    var server = http.createServer(app.callback());

    // http 服务监听
    server.on('error', onError);
    server.on('listening', onListening);

    function onError(error) {

        if (error.syscall !== 'listen') {
            throw error;
        }
        var port = option.port;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                logger.error(port + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                logger.error(port + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    function onListening() {
        var port = option.port;
        logger.info('Listening on ' + port);
    }

    return server;
};

module.exports = createServer;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_thunk__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_koa_sbase_client__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__features_about__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3_react_koa_sbase_client__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_3_react_koa_sbase_client__["c"]; });







// redux middleware
__WEBPACK_IMPORTED_MODULE_3_react_koa_sbase_client__["a" /* redux */].use(__WEBPACK_IMPORTED_MODULE_0_redux_thunk___default.a);
__WEBPACK_IMPORTED_MODULE_3_react_koa_sbase_client__["a" /* redux */].use(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"]));

// redux reducer
__WEBPACK_IMPORTED_MODULE_3_react_koa_sbase_client__["a" /* redux */].reducer.use('routing', __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"]);
__WEBPACK_IMPORTED_MODULE_3_react_koa_sbase_client__["a" /* redux */].reducer.use('about', __WEBPACK_IMPORTED_MODULE_4__features_about__["a" /* reducer */]);

// react-router
__WEBPACK_IMPORTED_MODULE_3_react_koa_sbase_client__["b" /* router */].use(__WEBPACK_IMPORTED_MODULE_4__features_about__["b" /* route */]);

//
if (false) run();

//


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__redux_reducer__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__redux_reducer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__route__["a"]; });





/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TIME_PASSED; });
var TIME_PASSED = 'TIME_PASSED';

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return initialState; });
var initialState = 0;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(24);
/* unused harmony export timePassed */
/* unused harmony export timePassedForever */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return reducer; });


var ONE_SECOND = 1000;

function timePassed() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* TIME_PASSED */]
    };
}

function timePassedForever() {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            var st = setTimeout(function () {
                clearTimeout(st);
                // timePassedForever()
                resolve();
            }, ONE_SECOND);
        }).then(function () {
            dispatch({
                type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* TIME_PASSED */]
            });
        });
    };
}

var reducer = function reducer(state, action) {

    switch (action) {
        case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* TIME_PASSED */]:
            return state + 1;
        default:
            return state;
    }
};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initialState__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myLogic__ = __webpack_require__(26);
/* harmony export (immutable) */ exports["a"] = reducer;



var reducers = [__WEBPACK_IMPORTED_MODULE_1__myLogic__["a" /* reducer */]];

/**
 * 分发到每一个子reducer中处理
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__initialState__["a" /* initialState */];
    var action = arguments[1];

    return reducers.reduce(function (s, r) {
        return r(s, action);
    }, state);
}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    path: 'about',
    name: 'about',
    childRoutes: [{
        path: 'index',
        name: 'about.index',
        getComponent: function getComponent(nextState, cb) {
            __webpack_require__.e/* nsure */(0).then((function (require) {
                cb(null, __webpack_require__(46).default);
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        },
        isIndex: true
    }]

};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






//
// import configStore from '../../client/common/configStore'

var asyncMatch = function asyncMatch(location) {
    return new Promise(function (resolve, reject) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router__["match"])(location, function (error, redirectLocation, renderProps) {
            if (error) {
                return reject(error);
            }

            resolve({ redirectLocation: redirectLocation, renderProps: renderProps });
        });
    });
};

var asyncStore = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(store, renderProps) {
        var prefetchTasks, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, component, _tasks;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        prefetchTasks = [];
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 4;

                        for (_iterator = renderProps.components[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            component = _step.value;


                            // component.WrappedComponent 是redux装饰的外壳
                            if (component && component.WrappedComponent && component.WrappedComponent.fetch) {
                                _tasks = component.WrappedComponent.fetch(store.getState(), store.dispatch);

                                if (Array.isArray(_tasks)) {
                                    prefetchTasks = prefetchTasks.concat(_tasks);
                                } else if (_tasks.then) {
                                    prefetchTasks.push(_tasks);
                                }
                            }
                        }

                        _context.next = 12;
                        break;

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](4);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                    case 12:
                        _context.prev = 12;
                        _context.prev = 13;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 15:
                        _context.prev = 15;

                        if (!_didIteratorError) {
                            _context.next = 18;
                            break;
                        }

                        throw _iteratorError;

                    case 18:
                        return _context.finish(15);

                    case 19:
                        return _context.finish(12);

                    case 20:
                        _context.next = 22;
                        return Promise.all(prefetchTasks);

                    case 22:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this, [[4, 8, 12, 20], [13,, 15, 19]]);
    }));

    return function asyncStore(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

function renderHtml(html, state) {

    var template = '\n        <!DOCTYPE html>\n        <html lang="en">\n\n        <head>\n            <meta charset="UTF-8">\n            <title>React Template</title>\n        </head>\n\n        <body>\n            <div id="root">\n                <div><script>//inject_html</script></div>\n            </div>\n\n            <script>//inject_redux_state</script>\n            <script>//inject_js</script>\n\n        </body>\n\n        </html>\n    ';

    // 序列化的redux状态
    var reduxState = '<script>window.__REDUX_STATE__ = ' + JSON.stringify(state) + ';</script>';

    // 跟进环境，注入的js链接
    var jsLink = function (isDev) {
        if (isDev) return '<script src="http://localhost:3001/dist/client.js"></script>';else return '<script src="/client/client.js"></script>';
    }(false);

    // 返回给浏览器的html
    var responseHtml = template.replace('<script>//inject_html</script>', html).replace('<script>//inject_redux_state</script>', reduxState).replace('<script>//inject_js</script>', jsLink);

    return responseHtml;
}

module.exports = function (routes, configStore) {
    var _this2 = this;

    // console.log(JSON.stringify(routes))

    return function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
            var memoryHistory, store, history, _ref3, redirectLocation, renderProps;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            memoryHistory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router__["createMemoryHistory"])(ctx.url);
                            store = configStore(memoryHistory);
                            history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__["syncHistoryWithStore"])(memoryHistory, store);
                            _context2.next = 6;
                            return asyncMatch({ history: history, routes: routes, location: ctx.url });

                        case 6:
                            _ref3 = _context2.sent;
                            redirectLocation = _ref3.redirectLocation;
                            renderProps = _ref3.renderProps;

                            if (!redirectLocation) {
                                _context2.next = 13;
                                break;
                            }

                            ctx.redirect(redirectLocation.pathname + redirectLocation.search);
                            _context2.next = 21;
                            break;

                        case 13:
                            if (!renderProps) {
                                _context2.next = 19;
                                break;
                            }

                            _context2.next = 16;
                            return asyncStore(store, renderProps);

                        case 16:

                            ctx.body = renderHtml(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"],
                                { store: store },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["RouterContext"], renderProps)
                            )), store.getState());
                            _context2.next = 21;
                            break;

                        case 19:
                            _context2.next = 21;
                            return next();

                        case 21:
                            _context2.next = 28;
                            break;

                        case 23:
                            _context2.prev = 23;
                            _context2.t0 = _context2['catch'](0);

                            console.error('Server-Render Error Occures: %s', _context2.t0.stack);
                            ctx.status = 500;
                            ctx.body = _context2.t0.message;

                        case 28:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[0, 23]]);
        }));

        return function (_x3, _x4) {
            return _ref2.apply(this, arguments);
        };
    }();
};

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("babel-polyfill");

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("co");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("koa-compress");

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("koa-html-minifier");

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("koa-json");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("koa-log4");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("koa-response-time");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("koa-static");

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("react-dom");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("redux-thunk");

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }
/******/ ]);