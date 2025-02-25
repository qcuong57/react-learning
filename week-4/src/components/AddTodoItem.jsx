import React from 'react'
import { useState, useRef } from 'react'

function AddTodoItem({onAdd}) {
  const [newTask, setNewTask] = useState("")
  const inputRef = useRef(null)

  const handleAdd = () => {
    if(newTask.trim() !== ""){
        onAdd(newTask)
        setNewTask("")
        inputRef.current.focus()
    }
  }
    return (
        <>
            <input ref={inputRef} type="text" placeholder='Nhap cong viec can lam' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button onClick={handleAdd}>Them</button>
        </>
  )
}

export default AddTodoItem