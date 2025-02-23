import React from 'react'
import { useState } from 'react'
export default function TaskInput() {
    const [task, setTask] = useState('')
  return (
    <div><input type='text' placeholder='nhập công việc' value={task} onChange={(e) => setTask(e.target.value)}/>
    <p>Bạn đang nhập: {task}</p>
    <button type='button' onClick={(e) => setTask("")}>Xóa</button>
    </div>
  )
}
