import { useState } from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import updateTaskRequest from "./updateTaskRequest";

const UpdateTask = () => {
    const {taskId} = useParams()
    console.log(taskId)
    const {data: task, setData: setTask} = useFetch(`http://localhost:4000/api/tasks/${taskId}`)
    console.log(task)
    const [name, setName] = useState('')
    const [priority, setPriority] = useState('')
    return (  
        task && 
        <div className="update-task">
            <form>
                <label>
                    Name
                </label>
                <input type="text" defaultValue={task.name} onChange={(e) => {setName(e.target.value)}}></input>
                <label>
                    Priority
                </label>
                <input type="text" defaultValue={task.priority} onChange={(e) => {setPriority(e.target.value)}}></input>
                <button onClick={() => {updateTaskRequest({name, priority}, setTask, taskId)}}>UPDATE TASK</button>
            </form>
        </div>

    );
}
 
export default UpdateTask;