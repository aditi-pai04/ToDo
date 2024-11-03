import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleEdit = () => {
    editTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-task">
          <input 
            type="text" 
            value={updatedTask.name} 
            onChange={(e) => setUpdatedTask({ ...updatedTask, name: e.target.value })} 
          />
          <textarea 
            value={updatedTask.description} 
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })} 
          />
          <input 
            type="date" 
            value={updatedTask.deadline} 
            onChange={(e) => setUpdatedTask({ ...updatedTask, deadline: e.target.value })} 
          />
          <button onClick={handleEdit} className="save-button">Save</button>
        </div>
      ) : (
        <>
          <div className="task-details">
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <p><strong>Deadline:</strong> {task.deadline}</p>
          </div>
          <div className="task-actions">
            <label>
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTaskCompletion(task.id)} 
              /> Done
            </label>
            <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
            <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
