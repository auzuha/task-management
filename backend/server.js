const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const subtasksRoute = require('./routes/subtasks')
const tasksRoute = require('./routes/tasks')

app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}!!!`)
    })
    }

)
.catch((error) => {
    console.log(error)
})





app.get('/', (req, res) => {
    res.status(200).json({msg: 'Alive'})
})


app.use('/api/subtasks', subtasksRoute)
app.use('/api/tasks', tasksRoute)