import { useState } from "react";
import addTask from "./addTask";

const CreateTask = () => {

    
    const [name, setName] = useState('')
    
    const [priority, setPriority] = useState('')
    const [tasks, setTasks] = useState('')
    const handleSubmit = (e) =>{
        return true;
    }
    

    return ( 
        
        <div className="create-task">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" required  onChange={(e) => setName(e.target.value)}></input>
                <label>Priority</label>
                <input type="text" required  onChange={(e) => setPriority(e.target.value)}></input>
                <button type="submit" onClick={() => addTask({name, priority}, setTasks)}>Add Task</button>
            </form>
        </div>

     );
}
 
export default CreateTask;