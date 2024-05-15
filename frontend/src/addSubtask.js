


const addSubtask = (data, setSubtasks, taskId) => {
    data.taskId = taskId
    fetch('http://localhost:4000/api/subtasks/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
        
    })
    .then(
        (() => console.log('done'))
    )

    setTimeout(() => {fetch(`http://localhost:4000/api/subtasks/list/${taskId}`)
    .then(
        (res) => (res.json())
    )
    .then(
        (data) => {setSubtasks(data);console.log(data)}
    )}, 1000)

}

export default addSubtask;