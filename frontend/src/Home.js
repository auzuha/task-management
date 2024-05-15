import Tasks from "./Tasks";

import useFetch from "./useFetch";

function Home() {

    const { data: tasks , setData: setTasks} = useFetch('http://localhost:4000/api/tasks/')

    return (
        <div className="home">
        {tasks && <Tasks tasks={tasks} setTasks={setTasks}/>}
        </div>
    )
    
}

export default Home;

