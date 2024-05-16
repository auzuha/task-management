const Subtask = require('../models/subtaskModel')

const getAllSubtasks = async (req, res) => {
    try{
        const subtasks = await Subtask.find({type: "subtask"})
        res.status(200).json(subtasks)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: 'Internal Server Error'})
    }
}

const getSubtaskById = async (req, res) => {
    try{
        id = req.params.subtaskId
        const subtask = await Subtask.findOne({_id: id, type: "subtask"})
        res.status(200).json(subtask)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: 'Internal Server Error'})
    }

}

const getSubtasksForTask = async (req, res) => {
    try{
        taskId = req.params.taskId
        const subtasks = await Subtask.find({taskId: taskId})
        res.status(200).json(subtasks)

    }
    catch(err){
        console.log(err)
        res.status(500).json({message: 'Internal Server Error'})
    }
}

const updateSubtaskById = async (req, res) => {
    try{    
        const subtaskId = req.params.subtaskId
        const data = {...req.body}
        const updatedSubtask = await Subtask.updateOne({_id: subtaskId}, data)
        res.status(200).json({message: 'Done'})

    }
    catch(err){
        console.log(err)
        res.status(500).json({message: 'Internal Server Error'})
    }
}

const addSubtask = async(req, res) =>{
    try{
    
        const {taskId, name, priority, progressPercentage, owner, description, ETA} = req.body
        const addedSubtask = await Subtask.create({taskId, name, priority, progressPercentage, owner, description, ETA})
        res.status(201).json(addedSubtask)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: 'Internal Server Error'})
    }
}

const deleteSubtask = async(req, res) =>{
    try{
        const id = req.params.subtaskId
        const deletedSubtask = await Subtask.deleteOne({_id: id})
        res.status(200).json(deletedSubtask)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: 'Internal Server Error'})
    }
}

module.exports = {
    getAllSubtasks, getSubtaskById, getSubtasksForTask, updateSubtaskById, addSubtask, deleteSubtask
}