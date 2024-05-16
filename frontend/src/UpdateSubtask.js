import { useState } from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import updateSubtaskRequest from "./updateSubtaskRequest";

const UpdateSubtask = () => {
    const {subtaskId} = useParams()
    
    const {data: task, setData: setTask} = useFetch(`http://localhost:4000/api/subtasks/${subtaskId}`)
    
    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [progressPercentage, setProgressPercentage] = useState('')
    return (  
        task && 
        <div className="update-task">
            <form>
                <label>
                    Name
                </label>
                <input type="text" defaultValue={task.name} onChange={(e) => {setName(e.target.value)}}></input>

                <label>
                    Owner
                </label>
                <input type="text" defaultValue={task.owner} onChange={(e) => {setOwner(e.target.value)}}></input>

                <label>
                    Description
                </label>
                <input type="text" defaultValue={task.description} onChange={(e) => {setDescription(e.target.value)}}></input>

                <label>
                    Priority
                </label>
                <input type="text" defaultValue={task.priority} onChange={(e) => {setPriority(e.target.value)}}></input>
                <label>
                    Progress
                </label>
                <input type="text" defaultValue={task.progressPercentage} onChange={(e) => {setProgressPercentage(e.target.value)}}></input>

                
                <button onClick={() => {updateSubtaskRequest({name, owner, description, priority, progressPercentage}, setTask, subtaskId)}}>UPDATE TASK</button>
            </form>
        </div>

    );
}
 
export default UpdateSubtask;