


const updateTaskRequest = (data, setSubtasks, taskId) => {
    console.log(data)
    if(!data.name)
        delete data.name
    if(!data.priority)
        delete data.priority
    fetch(`http://localhost:4000/api/tasks/${taskId}`, {
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