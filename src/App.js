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
      priority:"High",
      id:1,
    }]);
    const [showTasks,setShowTasks] = useState(tasks);
    const [ searchTitle ,setSearchTitle ] = useState("");


  const addNewTask = (newTask)=>{
    newTask.id = Math.round(Math.random()*100);
    newTask.status = false;
    setTasks(p=>[...p,newTask]);
    setShowTasks(p=>[...p,newTask]);
  }
  
  const doneTask = (id)=>
{
  var newTasks = []
  tasks.forEach((task)=>{
    if(task.id===id){
      newTasks.push({...task,status:true})
    }
    else 
    newTasks.push(task)
  })
  setTasks(newTasks);
  setShowTasks(newTasks);
  console.log(newTasks)
}
const  deleteTask = (id) =>
{
  const newTasks = []
  tasks.forEach((task)=>{
    if(task.id !== id)
    newTasks.push(task)
  })
  setTasks(newTasks)
  setShowTasks(newTasks);
}

const search = (str)=>{
  setShowTasks(tasks.filter(task=>task.title===searchTitle));
}
  return <div>
    <Nav/>
    <div className='w-full flex flex-col justify-center md:flex-row md:justify-start'>
    <Form addNewTask={addNewTask}/>
      <div>
      <form className='flex flex-row justify-center my-4' onSubmit={(e)=>{e.preventDefault(); setSearchTitle("")}}>
      <input type="text" placeholder='Enter text to search' className='px-2 m-2' onChange={(e)=>{setSearchTitle(e.target.value);search();}} value={searchTitle}/>
      <button disabled >🔎</button>
      {searchTitle && <button type="submit" className="font-semibold mx-1" onClick={(e)=>{setShowTasks(tasks);setSearchTitle("");}} >Cancel</button>}
      </form>
      <Tasks tasks={showTasks} doneTask={doneTask} deleteTask={deleteTask}/>
      </div>
    </div>
  </div>
}