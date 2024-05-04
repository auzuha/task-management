const mongoose = require('mongoose')


const Schema = mongoose.Schema

subtaskSchema = new Schema(
    {
        taskId: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        priority: {
            type: String,
            required: true
        },
        progressPercentage: {
            type: Number,
            required: true
        },
        owner: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            default: ""
        },
        ETA: {
            type: Date,
            required: false,
            default: null
        },
        type: {
            type: String,
            required: true,
            default: "subtask"
        }

    },
    {timestamps: true}
)

module.exports = mongoose.model('Subtask', subtaskSchema, 'tasks')
