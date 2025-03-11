import React, { useState } from 'react';
import api from '../services/api';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Funzione per creare un nuovo task
  const createTask = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks', { title, description });
      setTitle('');
      setDescription('');
      onTaskCreated(); // Ricarica la lista dei task
    } catch (error) {
      console.error('Errore nella creazione del task:', error);
    }
  };

  return (
    <form onSubmit={createTask} className="container">
      <h3>➕ Aggiungi un nuovo Task</h3>
      <input
        type="text"
        placeholder="Titolo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrizione"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Aggiungi</button>
    </form>
  );
};

export default TaskForm;

