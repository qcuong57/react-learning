import React from "react";
import { useState } from "react";

function TodoItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span onClick={onToggle} style={{ cursor: "pointer" }}>
          {task.text}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleEdit}>Luu</button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Sua</button>
          <button onClick={onDelete}>Xoa</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
