
const taskCollection = require('../models/taskModel')

const getAllTasks = async (req, res) => {
    try{
        const tasks = await taskCollection.find({type: 'task'})
        res.status(200).json(tasks)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
    }

}

const getTaskById = async (req, res) => {
    try{
        id = req.params.taskId
        const task = await taskCollection.findOne({_id: id, type: 'task'})
        res.status(200).json(task)

    }
    catch(err){
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
    }

}

const updateTaskById = async (req, res) => {
    try{
        res.status(501).json({message: 'Not Implemented'})

    }
    catch(err){
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
    }

}

const addTask = async (req, res) => {
    try{
        const {name, priority} = req.body
        const addedTask = await taskCollection.create({name, priority})
        res.status(201).json(addedTask)

    }
    catch(err){
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
    }

}

const deleteTaskById = async (req, res) => {
    try{

        const id = req.params.taskId
        const deletedTask = await taskCollection.deleteOne({_id: id})
        res.status(200).json(deletedTask)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: 'Internal Server Error'})
    }
}
module.exports = {
    getAllTasks, getTaskById, updateTaskById, addTask, deleteTaskById
}