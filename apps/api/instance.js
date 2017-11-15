import spMysql from 'sp-mysql'
import User from './models/User'
import AuthService from 'sp-auth/service'
import UserAccessToken from 'sp-auth/models/UserAccessToken'

const config = require('./config')
const mysql = new spMysql(config.mysql)


const userModel = new User(mysql)
const userAccessTokenModel = new UserAccessToken(mysql)

const authService = new AuthService()
authService.inject({ userModel, userAccessTokenModel })

export {
    mysql,
    userModel,
    authService
}