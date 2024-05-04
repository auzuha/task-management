const mongoose = require('mongoose')


const Schema = mongoose.Schema

taskSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        priority: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: "task"
        }

    },
    {timestamps: true}
)

module.exports = mongoose.model('Task', taskSchema, 'tasks')