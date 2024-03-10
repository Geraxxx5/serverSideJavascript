const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost',
  port: 33069,
  user: 'blog_user',
  database: 'blog_zelda',
  password: 'blog_password',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

module.exports = pool
