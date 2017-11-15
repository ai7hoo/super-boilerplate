import spMysql from 'sp-mysql'
import News from './models/News'

const config = require('./config')
const mysql = new spMysql(config.mysql)


const newsDao = new News(mysql)

export {
    mysql,
    newsDao
}