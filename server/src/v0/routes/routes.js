const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.post('/', userController.createUser)
router.get('/', userController.getUsers)

module.exports = router
