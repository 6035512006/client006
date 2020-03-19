import React from 'react'
import './Task.css'

export default (props) =>{
    const {task,editTask,deleteTask} = props
    const {id,name} = task
    return(    
    <li >
        <div className="id">
            {id}
        </div>
        <div className="name">
            {name}
        </div>
        <div className='container'>
        <button onClick ={()=>deleteTask(task.id)}>Delete</button>
        <button onClick ={()=>editTask(task.id)}>Edit</button>
        </div>
        </li>
    )
}