// load environment variables for development
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// import dependecies
const express = require('express')
const connectDB = require('./config/db')
const router = require('./v0/routes/routes')

// create express app and connect database
const app = express()
const PORT = process.env.PORT || 3000

connectDB()

// configure express app
app.use(express.json())

// route handler
app.use('/api/v0/user', router)

// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
