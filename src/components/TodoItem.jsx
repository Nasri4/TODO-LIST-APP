import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (newText.trim()) {
      updateTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
        />
      ) : (
        <div
          onClick={() => toggleComplete(todo.id)}
          className={`cursor-pointer flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
        >
          {todo.text}
        </div>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
