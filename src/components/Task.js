import React from 'react'
export default function Task({task}){
    const bgColorMap = new Map([
        [1,"bg-green-300"],
        [2,"bg-yellow-300"],
        [3,"bg-red-200"]
    ]);
    return (
        <article className={`flex justify-between flex-col border-l border-r border-t border-b  border-solid border-black p-2 m-2 w-fit  ${bgColorMap.get(3)}`}>
        <div className='font-semibold'>Title:<div className='font-normal'>{task.title}</div></div>
        <div className='font-semibold' >Description:<div className='font-normal '>{task.description}</div></div>
        <div  className='font-semibold'>DueDate:<div className='font-normal '>{task.duedate}</div></div>
        <div  className='font-semibold'>Priority:<div className='font-normal '>{task.priority}</div></div>
        </article>
    )
}