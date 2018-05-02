const router = require('koa-router')()

router.get('*', async(ctx) => {
    ctx.status = 404
    return ctx.render('404.ejs')
})

export default (app) => {
    app.use(router.routes())
}