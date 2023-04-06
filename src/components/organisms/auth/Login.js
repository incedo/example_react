import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../../store/reducers/userReducer';
import { setProfile } from '../../../store/reducers/userReducer';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // You should replace this with an actual API call to authenticate the user
    const dummyUsername = 'kees';
    const dummyPassword = 'test';
    if (username === dummyUsername && password === dummyPassword) {
      // You should replace this with an actual API call to authenticate the user
      

      const userData = { id: 1, name: 'Kees', username: 'kees' };
      dispatch(login(userData));
      dispatch(setProfile({ name: 'Kees', imageUrl: 'https://www.pinclipart.com/picdir/middle/541-5416602_dummy-profile-image-url-clipart.png', bio : "testdata" }));
    } else {
      alert('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    return <p>You are already logged in.</p>;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
