const express = require('express')

const {
    getAllTasks, getTaskById, updateTaskById, addTask, deleteTaskById
} = require('../controllers/taskController')

router = express.Router()

//get all tasks
router.get('/', getAllTasks)

//get task by id
router.get('/:taskId', getTaskById)

//add task
router.post('/', addTask)

//update task by id
router.patch(':/taskId', updateTaskById)

//delete task by id
router.delete('/:taskId', deleteTaskById)




module.exports = router