const path = require('path')
const router = require('koa-router')()
const config = require('../config')

const UPLOAD_FILE_NAME = 'MY_FILE_NAME'

/* 检查文件是否存在 */

const checkFile = (filename) => async(ctx, next) => {

    let file = ctx.request.body.files[filename]
    if (!file) {
        ctx.body = {
            code: 1,
            msg: 'no file'
        }
        return
    } else {
        await next()
    }
}

/* 检查是否是图片 */

const checkImage = (filename) => async(ctx, next) => {

    let file = ctx.request.body.files[filename]
    if ('.jpg|.png'.indexOf(path.extname(file.path).toLowerCase()) == -1) {
        ctx.body = {
            code: 1,
            msg: 'file type must be .jpg | .png'
        }
        return
    } else {
        await next()
    }
}

const handlerUploadFile = require('koa-body')({
    multipart: true,
    formidable: {
        uploadDir: config.uploadPath,
        keepExtensions: true,
        hash: 'md5',
        maxFieldsSize: 2 * 1024 * 1024 // 2 M
    }
})

router
    .post('/upload',
        handlerUploadFile,
        checkFile(UPLOAD_FILE_NAME),
        checkImage(UPLOAD_FILE_NAME),
        async(ctx) => {

            let file = ctx.request.body.files[UPLOAD_FILE_NAME]
            let filename = path.basename(file.path)

            console.log(ctx.request.body.files)

            let result = {
                // errno 即错误代码，0 表示没有错误。
                //       如果有错误，errno != 0，可通过下文中的监听函数 fail 拿到该错误码进行自定义处理
                errno: 0,

                // data 是一个数组，返回若干图片的线上地址
                data: [
                    `/upload/${path.basename(file.path)}`
                ]
            }

            ctx.body = result
        }
    )

module.exports = router