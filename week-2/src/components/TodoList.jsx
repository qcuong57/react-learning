import { useState, useEffect } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const saveTasks = JSON.parse(localStorage.getItem("tasks"));
    if (saveTasks) {
      setTasks(tasks);
    }
  }, []);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h2>Danh sach cong viec</h2>
      <input
        type="text"
        placeholder="Nhap cong viec"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Them</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Xoa</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
