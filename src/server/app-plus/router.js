const router = require('koa-router')()

router
    .get('/', (ctx) => {
        return ctx.render('plus-index.ejs')
    })
    .get('*', async(ctx) => {
        return ctx.render('plus-404.ejs');
    })


module.exports = router