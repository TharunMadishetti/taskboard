import React from 'react'
export default function Task({task}){
    const bgColorMap = new Map([
        ['Low',"bg-green-300"],
        ['Medium',"bg-yellow-300"],
        ['High',"bg-red-200"]
    ]);
    return (
        <article className={`flex justify-between flex-col border-l border-r border-t border-b  border-solid border-black p-2 m-2 w-fit font-semibold ${bgColorMap.get(task.priority)}`}>
        <div >Title:<div className='font-normal'>{task.title}</div></div>
        <div>Description:<div className='font-normal '>{task.description}</div></div>
        <div> DueDate:<div className='font-normal '>{task.due_date}</div></div>
        <div> Priority:<div className='font-normal '>{task.priority}</div></div>
        </article>
    )
}