const { Pool } = require('pg')

const pool = new Pool({
    user: "gus",
    password:"0550",
    host: "localhost",
    port: 5432,
    database: "fish_game",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('..ошибка инициализации подключения к postgresql:', err.stack)
  }

  client.query('SELECT NOW()', (err, result) => {
    release()

    if (err) {
      return console.error('..ошибка выполнения запроса к postgresql:', err.stack)
    }

    console.log('..успешное тестовое подключение к postgresql на порту:', pool.options.port, result.rows)
  })
})


module.exports = pool