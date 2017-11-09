// const instance = require('../instance')
const router = require('koa-router')()

const DEBUG = false

// Just for demo 
const session = []
const auth = async(ctx, next) => {
    if (DEBUG) {
        await next()
    } else {
        let sid = ctx.cookies.get('_sid')

        if (~session.indexOf(sid)) {
            await next()
        } else {
            ctx.status = 403
        }
    }
}

router
    .get('/login', async(ctx) => {
        return ctx.render('admin/login.ejs')
    })
    .post('/login', async(ctx) => {

        let username = ctx.request.body.username
        let password = ctx.request.body.password

        if (username === 'admin' && password === 'admin') {
            let sid = Math.random().toString(32).substr(2)
            session.push(sid)
            ctx.cookies.set('_sid', sid)
            ctx.body = {
                code: 0
            }
            return
        } else {
            ctx.body = {
                code: 1,
                msg: '用户名或密码错误！'
            }
        }

    })
    .get('/admin/upload', auth, (ctx) => {
        return ctx.render('admin/upload.ejs')
    })


module.exports = router