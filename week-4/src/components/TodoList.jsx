import { useState, useEffect } from "react";
import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saveTasks = JSON.parse(localStorage.getItem("tasks"));
    if (saveTasks) {
      setTasks(saveTasks);
    }
  }
  , []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index, newText) => {
    const updatedTasks = tasks.map((tasks, i) =>
      i === index ? { ...tasks, text: newText } : tasks
    );
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <h2>Danh sach cong viec</h2>
      <AddTodoItem onAdd={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
            onToggle={() => toggleComplete(index)}
            onEdit={(newText) => editTask(index, newText)}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
