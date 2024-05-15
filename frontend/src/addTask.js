


const addTask = (data, setTasks) => {

    fetch('http://localhost:4000/api/tasks/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
        
    })
    .then(
        (() => console.log('done'))
    )

    setTimeout(() => {fetch('http://localhost:4000/api/tasks/')
    .then(
        (res) => (res.json())
    )
    .then(
        (data) => {setTasks(data);console.log(data)}
    )}, 1000)

}

export default addTask;