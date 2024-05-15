import { useState } from "react";

const CreateDemo = () => {

    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`title is ${title}`)
    }
    return (  

        <div className="create-demo">
            <h2>Add new create demo</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter name</label>
                <input 
                type="text"
                required
                onChange={(e) => {setTitle(e.target.value)}}
                />
            <button type="submit">submit</button>
            </form>
            <p>{title}</p>
        </div>
    );
}
 
export default CreateDemo;