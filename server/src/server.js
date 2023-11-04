// load environment variables for development
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// import dependecies
const express = require('express')

// create express app
const app = express()
const PORT = process.env.PORT || 3000

// configure express app
app.use(express.json())

// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
