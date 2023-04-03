import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export async function getProfile() {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}
