


const updateTaskRequest = (data, setSubtasks, taskId) => {
    
    if(!data.name)
        delete data.name
    if(!data.owner)
        delete data.owner
    if(!data.description)
        delete data.description
    if(!data.priority)
        delete data.priority
    if(!data.progressPercentage)
        delete data.progressPercentage
    console.log(data)
    fetch(`http://localhost:4000/api/subtasks/${taskId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
        
    })
    .then(
        (() => console.log('done'))
    )


}

export default updateTaskRequest;