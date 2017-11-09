const router = require('koa-router')()

router
    .get('/', async(ctx) => {
        let title = 'Home Page'
        return ctx.render('home.ejs', {
            title
        })
    })
    .get('*', async(ctx) => {
        return ctx.render('404.ejs');
    })

module.exports = router