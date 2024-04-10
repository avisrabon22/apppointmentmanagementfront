import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/v1/user';

export const Api = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

 