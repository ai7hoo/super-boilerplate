
import { middleware, router, run, commonMiddlewares } from 'react-koa-sbase/server'
import { router as reactRouter, createConfigureStore } from './client'

// koa middleware
commonMiddlewares(middleware)

const isomorphic = require('./isomorphic-middleware')
const configureStore = createConfigureStore()
middleware.use(isomorphic(reactRouter.get(), configureStore))

const convert = require('koa-convert')
const koaStatic = require('koa-static')
middleware.use(convert(koaStatic(process.cwd() + '/dist/public')))

//
run()
