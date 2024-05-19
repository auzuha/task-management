import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import deleteSubtask from "./deleteSubtask";



const Subtask = () => {
    const {taskId} = useParams()
    const {data: subtasks, setData: setSubTasks} = useFetch(`http://localhost:4000/api/subtasks/list/${taskId}`)
    return (  
        subtasks &&
        <div className="tasks">
            <h2>
                Subtasks for<br />{subtasks[0].name}
            </h2>
            <button className="addTaskButton" onClick={() => {window.location.href='/createSubtask'}}>Add SubTask</button>
            {
                subtasks && subtasks.map((subtask) => {
                    return (
                        <div className="task-preview" key={subtask._id}>
                            <p>Name: {subtask.name}</p>
                            <p>Owner: {subtask.owner}</p>
                            <p>Description: {subtask.description}</p>
                            <p>Priority: {subtask.priority}</p>
                            <p>Progress: {subtask.progressPercentage}</p>
                            
                            <button className="updateTaskButton" onClick={() => window.location.href=`/updateSubtask/${subtask._id}`}>UPDATE SUBTASK</button>
                            <button className="deleteTaskButton" onClick={() => {deleteSubtask('http://localhost:4000/api/subtasks',subtask._id,subtask.taskId, setSubTasks)}}>DELETE SUBTASK</button>    
                        </div>
                    )
                })
            }
            

        </div>

    );
}
 
export default Subtask;