const express = require('express')
const userController = require('../controllers/userController')
const requireAuth = require('../middlewares/requireAuth')
const userUpload = require('../middlewares/userUpload')

const router = express.Router()

router.post('/register', userUpload.single('image'), userController.register)
router.post('/login', userController.login)
router.put('/:id', requireAuth, userUpload.single('image'), userController.update)
router.get('/logout', userController.logout)
router.get('/:id', userController.getUser)
router.get('/', userController.getUsers)

module.exports = router
