import React, { useState } from 'react'
import Nav from './components/Nav'
import Tasks from './components/Tasks';
import Form from './components/Form';
export default function App(){
  const [tasks,setTasks] = useState([
    {
      title:"complete fn7 assignement",
      description:"To-Do Application with a Radical Twist!",
      due_date:"06-11-2023",
      priority:"High"
    }]);
    const [showTasks,setShowTasks] = useState(tasks);
    const [ searchTitle ,setSearchTitle ] = useState("");
  const addNewTask = (newTask)=>{
    setTasks(p=>[...p,newTask]);
    setShowTasks(tasks);
  }
  const onSearch = (e)=>{
    e.preventDefault();
    setShowTasks(tasks.filter(task=>task.title===searchTitle));
    e.target.value = ""
  }
  return <div>
    <Nav/>
    <div className='w-full flex flex-col justify-center  flex-row justify-around'>
    <Form addNewTask={addNewTask}/>
    <form className='flex flex-row justify-center my-4' onSubmit={onSearch}>
    <input type="text" placeholder='Enter text to search' className='px-2 m-2' onChange={(e)=>setSearchTitle(e.target.value)}/>
    <button type="submit">🔎</button>
    {searchTitle && <button className="font-semibold mx-1" onClick={(e)=>{setShowTasks(tasks);setSearchTitle("");}} >Cancel</button>}
    </form>
    <Tasks tasks={showTasks}/>
    </div>
  </div>
}