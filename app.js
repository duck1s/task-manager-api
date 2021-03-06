// Config
const express = require('express')
require('dotenv').config()
const tasksRouter = require('./routes/tasks.route')
const { errorHandler } = require('./middlewares/error.middleware')
const connectDB = require('./database/connect.db')

const app = express()

app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasksRouter)

// Errors
app.use(errorHandler)

// Server
const port = process.env.PORT || 5000

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}`)
		)
	} catch (error) {
		console.log(error)
	}
}

start()
