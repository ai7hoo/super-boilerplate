import spModel from 'sp-model'

export default class News extends spModel {
    _table = 'dt_news'

    async getDisplayNewsList(lang, skip, limit, cols = '*') {
        
        skip = skip ? skip : 0
        limit = limit ? ` LIMIT ${skip},${limit} ` : ''
        let sql = `
            SELECT ${cols} 
            FROM ${this.table} 
            WHERE is_display = 1 AND lang = '${lang}'
            ORDER BY display_time DESC 
            ${limit}
        `

        let [result] = await this.mysql.query(sql)

        if (result && result.length > 0)
            return result
        return []
    }

    async getDisplayNewsListCount(lang, cols = '*') {
        
        let sql = `
            SELECT COUNT(1) AS count
            FROM ${this.table} 
            WHERE is_display = 1 AND lang = '${lang}'
        `

        let [result] = await this.mysql.query(sql)

        if (result && result.length > 0)
            return result
        return []
    }
    

    async getNewsList(lang, skip, limit, cols = '*') {
        
        skip = skip ? skip : 0
        limit = limit ? ` LIMIT ${skip},${limit} ` : ''
        let sql = `
            SELECT ${cols} 
            FROM ${this.table} 
            WHERE lang = '${lang}'
            ORDER BY display_time DESC 
            ${limit}
        `

        let [result] = await this.mysql.query(sql)

        if (result && result.length > 0)
            return result
        return []
    }
}