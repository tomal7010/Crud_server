const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Tomal@123',
    database:'email_list'
})

module.exports = mySqlPool;