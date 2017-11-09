const instance = require('../instance')
const router = require('koa-router')()

router
    .get('/news', async(ctx) => {
        // return ctx.render('insights-list-cn.ejs', { news, count })
    })
    .get('*', async(ctx) => {
        return ctx.render('404.ejs');
    })


module.exports = router