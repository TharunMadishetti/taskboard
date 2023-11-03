import React, { useState } from 'react'
import Nav from './components/Nav'
import Tasks from './components/Tasks';
import Form from './components/Form';
export default function App(){
  const [tasks,setTasks] = useState([
    {
      title:"complete fn7 assignement",
      description:"To-Do Application with a Radical Twist!",
      duedate:"06-11-2023",
      priority:"High"
    }]);
  return <div>
    <Nav/>
    <Form/>
    <Tasks tasks={tasks}/>
  </div>
}