class UserController {
    async createUser(req, res) {
        const {name, login, password, password_repeat} = req.body
        console.log(name, login, password, password_repeat)
        res.json('ok')

    }
    async getUsers(req, res) {
        
    }
    async getOneUser(req, res) {

    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}

module.exports = UserController()

