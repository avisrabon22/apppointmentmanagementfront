import axios from 'axios';
const USER_URL = 'http://localhost:8080/api/v1/user';
const APPOINTMENT_URL = 'http://localhost:8080/api/v1/appointments';

export const Api = async (userData) => {
  try {
    const response = await axios.post(`${USER_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const LoginApi = async (userData) => {
  try {
    const response = await axios.post(`${USER_URL}/login`, userData,{withCredentials: true});
    return response;
  } catch (error) {
    throw error;
  }
}


export const AppointmentsApi = async () => {
  try {
    const response = (await axios.get(`${APPOINTMENT_URL}/get_all_appointments`));
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}