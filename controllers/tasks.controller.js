const Task = require('../models/tasks.model')
const asyncWrapper = require('express-async-wrapper')

const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({})
})

const setTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body)
})

const getTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params
	const task = await Task.findOne({ _id: taskID })
})

const deleteTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params
	const task = await Task.findOneAndDelete({ _id: taskID })
})

const updateTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params

	const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
		new: true,
		runValidators: true,
	})
})

module.exports = {
	getAllTasks,
	setTask,
	getTask,
	updateTask,
	deleteTask,
}
