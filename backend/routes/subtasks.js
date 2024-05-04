const express = require('express')
const {
    getAllSubtasks, getSubtaskById, getSubtasksForTask, updateSubtaskById, addSubtask, deleteSubtask
} = require('../controllers/subtaskController')

router = express.Router()

//get all subtasks
router.get('/', getAllSubtasks)

//get subtask by id
router.get('/:subtaskId', getSubtaskById)

//get all subtasks for a task by task id
router.get('/list/:taskId', getSubtasksForTask)

//add subtask
router.post('/', addSubtask)

//delete subtask
router.delete('/:subtaskId', deleteSubtask)

//update subtask by id
router.patch('/:subtaskId', updateSubtaskById)

module.exports = router