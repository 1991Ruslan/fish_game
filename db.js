const Pool = require('pg').Pool
const pool = new Pool({
    user: "gus",
    password:"0550",
    host: "localhost",
    port: 3000,
    database: "fish_game"
})


module.exports = pool