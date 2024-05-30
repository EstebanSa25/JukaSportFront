import axios from 'axios';
import { getEnvVariables } from '@/utilities';

const { VITE_API_URL } = getEnvVariables();

const JukaSportApi = axios.create({
    baseURL: VITE_API_URL,
});

JukaSportApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default JukaSportApi;
