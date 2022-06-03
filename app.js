// Config
const express = require('express')
require('dotenv').config()
const tasksRouter = require('./routes/tasks.route')

const app = express()

app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasksRouter)

// Errors
app.use(errorHandler)

// Server
const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(`Server is listening on ${port}`)
})
