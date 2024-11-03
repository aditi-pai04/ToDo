import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskDescription && taskDeadline) {
      addTask({ id: Date.now(), name: taskName, description: taskDescription, deadline: taskDeadline });
      setTaskName('');
      setTaskDescription('');
      setTaskDeadline('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input 
        type="text" 
        placeholder="Task Name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Task Description" 
        value={taskDescription} 
        onChange={(e) => setTaskDescription(e.target.value)} 
        required 
      />
      <input 
        type="date" 
        value={taskDeadline} 
        onChange={(e) => setTaskDeadline(e.target.value)} 
        required 
      />
      <button type="submit" className="submit-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
