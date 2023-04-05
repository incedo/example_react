const API_BASE_URL = 'http://localhost:5000';
const REGISTER_URL = `${API_BASE_URL}/accounts`;
const LOGIN_URL = `${API_BASE_URL}/login`;

async function register(username, password) {
  const response = await fetch(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}

async function login(username, password) {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}

export default {
  register,
  login,
};