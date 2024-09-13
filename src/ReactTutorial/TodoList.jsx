import { useState } from "react"
import './todoStyle.css'

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('')

    const HandleAddTask = (event) => {
        setNewTask(event.target.value)
    }

    const AddTask = () => {
        if(newTask !== ''){
            setTasks( t => [...t, newTask])
        }
    }

    const RemoveTask = (index) => {
        let upDatedTask = tasks.filter((_,i) => i != index)
        setTasks(upDatedTask)
    }

    const mouseUp = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const mouseDown = (index) => {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(<div className="main">
        <h2>React To-Do-List</h2>

        <div className="mainDiv">
            
            <div className="inputs">
                <input type="text" placeholder="Enter task..." onChange={HandleAddTask}/>
                <button className="addTask" onClick={AddTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((getDeatails, deatailsKey) => <li key={deatailsKey}>
                            <p>{getDeatails}</p>
                            <button className="delete" onClick={() => RemoveTask(deatailsKey)}>Delete</button>
                            <button className="up" onClick={() => mouseUp(deatailsKey)}>☝️</button>
                            <button className="up" onClick={() => mouseDown(deatailsKey)}>👇</button>
                </li>)}
            </ol>
        </div>

    </div>)
}
export default ToDoList