


const deleteTask = (url, id, setTasks) => {
    fetch(url+`/${id}`, {
        method: 'DELETE',        
    })
    .then(
        (() => console.log('delete done'))
    )
    setTimeout(() => {fetch(url)
    .then(
        (res) => (res.json())
    )
    .then(
        (data) => {setTasks(data);console.log(data)}
    )}, 1000)
    
}

export default deleteTask;