import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList'
import TaskCreate from './components/TaskCreate'

function App() {
  const [task, setTask] = useState([])

  
  const createTask=(title,desc)=>{
    const createdTasks = [
      ...task,{
        id: Math.round(Math.random()*9999),
        title : title , 
        desc: desc
      }
    ]
    setTask(createdTasks)
  }



  const deleteTaskById=(id)=>{
    const afterDeleteTask = task.filter((task)=>{
        return task.id !==id
      })
    setTask(afterDeleteTask)
  }



  const editTaskById=(id,updatedTitle,updatedDesc)=>{
    const updatedTask = task.map((task)=>{
      if(task.id ===id){
        return{
          id,
          title : updatedTitle,
          desc : updatedDesc
        }
      }
      else{
        return task
      }
      })
    setTask(updatedTask)
  }



  return (
    <div className='app'>
      <TaskCreate onCreate={createTask}/>
      <TaskList  tasks ={task} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  )
}

export default App
