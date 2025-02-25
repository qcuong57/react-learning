import React, { useRef } from "react";
import { useState } from "react";

function TodoItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const inputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current.focus(), 100);
  };

  const handleSave = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="border p-2 rounded-md flex-1 mr-2"
        />
      ) : (
        <span className="text-gray-700">{task.text}</span>
      )}

      <div className="space-x-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-2 py-1 rounded-md"
          >
            Lưu
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-yellow-500 text-white px-2 py-1 rounded-md"
          >
            Sửa
          </button>
        )}
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-2 py-1 rounded-md"
        >
          Xóa
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
