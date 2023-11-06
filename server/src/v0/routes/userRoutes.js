const express = require('express')
const userController = require('../controllers/userController')
const requireAuth = require('../middlewares/requireAuth')

const router = express.Router()

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/logout', userController.logout)
router.get('/checkauth', requireAuth, userController.checkAuth)
router.get('/', userController.getUsers)

module.exports = router
