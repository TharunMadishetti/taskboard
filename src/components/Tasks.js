import React from 'react'
import Task from './Task'
export default function Tasks({tasks,deleteTask,doneTask}){
    return (
        <div className='flex flex-wrap justify-center '>
        
        {tasks.map((task,index)=>{
            return (
            <Task task={task} key={index} deleteTask={deleteTask} doneTask={doneTask}/>
            )
        })}
        </div>
    )
}