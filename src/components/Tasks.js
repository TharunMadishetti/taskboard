import React from 'react'
import Task from './Task'
export default function Tasks({tasks}){
    return (
        <div className='flex flex-wrap justify-center md:justify-around'>
        
        {tasks.map((task,index)=>{
            return (
            <Task task={task} key={index}/>
            )
        })}
        </div>
    )
}