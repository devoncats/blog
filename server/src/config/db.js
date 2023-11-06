const moongose = require('mongoose')

async function connectDB () {
  try {
    await moongose.connect(process.env.MONGO_URI)
    console.log('Database connected')
  } catch (error) {
    console.error(error)
    console.error('Database connection failed')
  }
}

module.exports = connectDB
