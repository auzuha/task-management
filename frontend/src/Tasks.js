import addTask from "./addTask"
import deleteTask from "./deleteTask"
import { Link } from "react-router-dom"

const Tasks = (props) => {
    const tasks = props.tasks
    const setTasks = props.setTasks
    return (
        <div className="tasks">
            <h2>Tasks</h2>
            <button className="addTaskButton" onClick={() => {window.location.href="/createTask"}}>Add Task</button>
            {
                tasks.map((task) => {
                    return (
                        
                        <div className="task-preview" key={task._id}>
                            <Link to={`/${task._id}`} style={{textDecoration: 'none'}}>
                            <p>ID : {task._id}</p>
                            <p>Task Name : {task.name}</p>
                            <p>Task Priority : {task.priority}</p>
                            </Link>
                            <button className="deleteTaskButton" onClick={() => {deleteTask('http://localhost:4000/api/tasks',task._id, setTasks)}}>DELETE TASK</button>    
                        </div>
                        
                        
                    )
                })
            }
                
            
        </div>
    )

}

export default Tasks;