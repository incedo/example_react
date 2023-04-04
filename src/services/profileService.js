import axiosInstance from './axiosInstance';

export async function getProfile() {
  try {
    const response = await axiosInstance.get(`/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}
