import React from 'react'
import Task from './Task'
export default function Tasks({tasks}){
    return (
        <>
        
        {tasks.map((task,index)=>{
            return (
            <Task task={task} key={index}/>
            )
        })}
        </>
    )
}