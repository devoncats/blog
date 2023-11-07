const jwt = require('jsonwebtoken')
const User = require('../models/users')

async function requireAuth (req, res, next) {
  try {
    const token = req.cookies.Auth
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded) return res.status(401).json({ error: 'Unauthorized' })

    if (decoded.exp < Date.now()) return res.status(401).json({ error: 'Token expired' })

    const user = await User.findById(decoded.sub)
    if (!user) return res.status(404).json({ error: 'User not found' })

    req.user = user

    next()
  } catch (error) {
    res.status(500).json({ error })
  }
}

module.exports = requireAuth
