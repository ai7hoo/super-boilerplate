/* 挂载子 app */
/*  
    eg: 

    module.exports = [{ 
        domain: [域名],
        app: [app入口]
    }]
*/

module.exports = [
    {
        domain: require('@app/config/site').domain,
        app: require('@app/server').default
    },
    {
        domain: 'api.test.com',
        app: require('@apps/api')
    }
]