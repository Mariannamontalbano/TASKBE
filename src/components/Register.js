import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(email, password, username);
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2>Registrati</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
};

export default Register;


