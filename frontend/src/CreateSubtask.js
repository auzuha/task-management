import { useState } from "react";
import useFetch from "./useFetch";
import addSubtask from "./addSubtask";

const CreateSubtask = () => {
    /* 
    taskId: taskId,
    owner: 'auzuha',
    name: 'new now',
    progressPercentage: 100,
    priority: 'low'
    */
   
    const {data: tasks, setData: setTasks} =  useFetch("http://localhost:4000/api/tasks")
    const [taskId ,setTaskId] = useState('')
   const [owner, setOwner] = useState('')
   const [name, setName] = useState('')
   const [progressPercentage, setProgressPercentage] = useState('')
   const [priority, setPriority] = useState('')
   const [description, setDescription] = useState('')
    const [subtasks, setSubtasks] = useState('')

   const handleSubmit = (e) => {
        console.log('event sumbit')
   }

   
    return (  
        <div className="create-subtask">
            <form onSubmit={handleSubmit}>
                <label htmlFor="parentTasksList">Parent Task</label>
                <select id="parentTasksList" name="parentTasksList" value={''} onChange={(e) => {setTaskId(e.target.value);}}>
                    <option value="" disabled>select a parent task</option>
                    {
                        tasks && tasks.map((task) => {
                            return (
                                <option value={task._id} key={task._id}>{task.name}</option>
                            )
                        })
                    }
                </select>
            <label>Owner</label>
            <input type="text" required onChange={(e) => setOwner(e.target.value)}></input>

            <label>Name</label>
            <input type="text" required onChange={(e) => setName(e.target.value)}></input>

            <label>Description</label>
            <input type="text" required onChange={(e) => setDescription(e.target.value)}></input>

            <label>progressPercentage</label>
            <input type="text" required onChange={(e) => setProgressPercentage(e.target.value)}></input>

            <label>Priority</label>
            <input type="text" required onChange={(e) => setPriority(e.target.value)}></input>

            <button type="submit" onClick={() => addSubtask({owner, name, progressPercentage, priority, description},setSubtasks, taskId)}>Add Subtask</button>
            </form>
        </div>

    );
}
 
export default CreateSubtask;