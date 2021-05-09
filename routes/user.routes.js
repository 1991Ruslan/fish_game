const Router = require('express')
const router = new Router()

const userConroller = require('../controller/user.conroller')


router.post('/user', userConroller.createUser)
router.get('/users', userConroller.getUsers)
router.get('/user/:id', userConroller.getUser)
router.post('/user/update', userConroller.updateUser)
router.post('/user/delete', userConroller.deleteUser)



module.exports = router