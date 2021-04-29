const Router = require('express')
const router = new Router()
const userConroller = require('../controller/user.conroller')

router.post('/user', userConroller.createUser)
router.get('/user', userConroller.getUser)
router.get('/user/:id', userConroller.getUser)
router.put('/user', userConroller.updateUser)
router.delete('/user/:id', userConroller.deleteUser)


module.exports = router