const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {name, login, password} = req.body
        const newPerson = await db.query(`INSERT INTO users (name, login, password) values ($1, $2, $3) RETURNING *`, [name, login, password,])
        
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

