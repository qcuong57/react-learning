import React from 'react'
import { useState } from 'react'

function AddTodoItem({onAdd}) {
  const [newTask, setNewTask] = useState("")

  const handleAdd = () => {
    if(newTask.trim() !== ""){
        onAdd(newTask)
        setNewTask("")
    }
  }
    return (
        <>
            <input type="text" placeholder='Nhap cong viec can lam' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button onClick={handleAdd}>Them</button>
        </>
  )
}

export default AddTodoItem