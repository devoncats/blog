// load environment variables for development
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// import dependecies
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const connectDB = require('./config/db')
const router = require('./v0/routes/userRoutes')

// create express app and connect database
const app = express()
const PORT = process.env.PORT || 3000

connectDB()

// configure express app
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: true,
  credentials: true
}))

// route handler
app.use('/api/v0/user', router)
app.use('/avatar', express.static('src/uploads/avatars'))
app.use('/image', express.static('src/uploads/images'))

// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
