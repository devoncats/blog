const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/users')

async function register (req, res) {
  try {
    const { name, email, password, role, gender, image } = req.body

    const hashedPassword = await bcrypt.hash(password, 8)

    await User.create({ name, gender, email, password: hashedPassword, role, image })

    res.json({ message: 'User created' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

async function login (req, res) {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ error: 'User not found' })

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid password' })

    const expire = Date.now() + 1000 * 60 * 60 * 24 * 30
    const token = jwt.sign({ sub: user._id, exp: expire }, process.env.JWT_SECRET)

    res.cookie('Auth', token, { expires: new Date(expire), httpOnly: true, secure: process.env.NODE_ENV === 'production' })

    res.json({ user })
  } catch (error) {
    res.status(500).json({ error })
  }
}

async function logout (req, res) {
  try {
    res.clearCookie('Auth')
    res.json({ message: 'Logged out' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

async function checkAuth (req, res) {
  try {
    res.json({ user: req.user })
  } catch (error) {
    res.status(500).json({ error })
  }
}

async function getUsers (req, res) {
  try {
    const users = await User.find()
    res.json({ users })
  } catch (error) {
    res.status(500).json({ error })
  }
}

module.exports = { register, login, logout, checkAuth, getUsers }
