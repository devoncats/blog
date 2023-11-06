const User = require('../models/users')

async function createUser (req, res) {
  try {
    const { name, email, password, role, gender, image } = req.body
    const user = await User.create({ name, gender, email, password, role, image })

    console.log(`Created new user: ${user}`)
    res.json({ user })
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

module.exports = { createUser, getUsers }
