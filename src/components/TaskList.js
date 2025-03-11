import React, { useEffect, useState } from 'react';
import api from '../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Recupera la lista dei task all'avvio
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Errore nel recupero dei task:', error);
    }
  };

  // Funzione per eliminare un task
  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id)); // Rimuove il task dalla lista
    } catch (error) {
      console.error('Errore nella cancellazione del task:', error);
    }
  };

  return (
    <div>
      <h2>📋 I tuoi Task</h2>
      <ul className="task-list">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <li key={task.id} className="task-item">
              <span>{task.title}</span>
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </li>
          ))
        ) : (
          <p>Nessun task trovato.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;

