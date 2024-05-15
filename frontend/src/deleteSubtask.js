


const deleteSubtask = (url, id, taskId, setTasks) => {
    fetch(url+`/${id}`, {
        method: 'DELETE',        
    })
    .then(
        (() => console.log('delete done'))
    )
    setTimeout(() => {fetch(url+`/list/${taskId}`)
    .then(
        (res) => (res.json())
    )
    .then(
        (data) => {setTasks(data);console.log(data)}
    )}, 1000)
    
}

export default deleteSubtask;