import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
})