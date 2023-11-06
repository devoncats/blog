const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: String,
  gender: String,
  image: String
})

const User = mongoose.model('User', userSchema)

module.exports = User
