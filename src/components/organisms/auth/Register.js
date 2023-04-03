import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/reducers/userReducer';
import authService from '../../../services/authService';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Replace this URL with the actual API endpoint for user registration
      const response = await authService.register(username, password);

      if (response.ok) {
        const userData = await response.json();
        // Dispatch the login action to update the Redux store
        dispatch(login(userData));
      } else {
        // Handle any errors from the API
        const error = await response.text();
        alert(`Error: ${error}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;