import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const [taskUpdated, setTaskUpdated] = useState(false);

  const handleTaskUpdate = () => {
    setTaskUpdated(!taskUpdated);
  };

  return (
    <div className="container">
      <h2>📌 Le tue attività</h2>
      <TaskForm onTaskCreated={handleTaskUpdate} />
      <TaskList key={taskUpdated} />
    </div>
  );
};

export default Dashboard;



