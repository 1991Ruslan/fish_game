const db = require('../db')


class UserController {
    async createUser(req, res) {

        // тело полученного POST запроса
        const {name, login, password} = req.body

        // получаем соединение с клиентом 
        const client = await db.connect()

        // выполняем запрос в БД
        const newUser = await db.query(
            `INSERT INTO users (name, login, password) values ($1, $2, $3) RETURNING *`,
            [name, login, password]
        )

        // завершает работу с клиентом
        client.release()

        // возвращает ответ по POST запросу
        res.json(newUser.rows)
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }
    
    async getUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM users where id = $1', [id])
        res.json(user.rows)
    }

    async updateUser(req, res) {
        const {id, name, login, password} = req.body
        const user = await db.query(
            'UPDATE users set name = $1, login = $2, password = $3 where id = $4 RETURNING *', [name, login, password, id]
        )
        res.json(user.rows)
    }
    
    // async deleteUser(req, res) {
    //     const id = req.params.id
    //     const user = await db.query('DELETE FROM users where id = $1', [id])
    //     res.json(user.rows)
    // }
    
    async statusUser(req, res) {
        const id = req.params.id
        const user = await db.query('UPDATE users set status = delete, where id = $1', [id])
        res.json(user.rows)
    }
}


module.exports = new UserController()