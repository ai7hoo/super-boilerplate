const router = require('koa-router')()
const instance = require('./instance')

router
    .get('/login', async(ctx) => {

        if (ctx.query.username == 'victor' && ctx.query.password == '123') {
            const userId = 1
            let accessToken = await instance.authService.login(userId)
            ctx.body = {
                code: 0,
                data: { accessToken }
            }
        } else {
            ctx.body = {
                code: 1,
                data: {},
                msg: 'Login Fail.'
            }
        }

    })
    .get('/admin', async(ctx) => {
        ctx.body = 'admin'
    })
    .get('*', async(ctx) => {
        return ctx.render('www-404.ejs');
    })


module.exports = router