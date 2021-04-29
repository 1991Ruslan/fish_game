const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {name, login, password, password_repeat} = req.body
        const newPerson = await db.query(`INSERT INTO users (name, login, password, password_repeat) values ($1, $2, $3, $4) RETURNING *`, [name, login, password, password_repeat])
        
        res.json(newUser)

    }
    async getUsers(req, res) {
        res.json('o1k')
    }
    async getUser(req, res) {

    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}

module.exports = new UserController()

