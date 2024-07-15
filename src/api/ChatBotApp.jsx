



import axios from 'axios';
import { getEnvVariables } from '../helper/getEnvVariables';

const { VITE_API_URL_BASE, VITE_API_TOKEN } = getEnvVariables();

export const ChatBotApp = axios.create({

    baseURL: VITE_API_URL_BASE

})

// Interceptor de solicitudes
ChatBotApp.interceptors.request.use(
    config => {


        config.headers.Authorization = `Bearer ${VITE_API_TOKEN}`;

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
