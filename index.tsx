import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
  },
});

export const loginUser = (email: string, password: string) =>
  axiosInstance.post('/users/login', { email, password });

export const signupUser = (email: string, password: string) =>
  axiosInstance.post('/users/signup', { email, password });

export const fetchPlans = () => axiosInstance.get('/plans');

export const logExercise = (data: { date: string; exercisesDone: any[] }) =>
  axiosInstance.post('/users/log-exercise', data);

export default axiosInstance;
