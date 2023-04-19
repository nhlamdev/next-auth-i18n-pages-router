import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: '/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (err: AxiosError) => {
        return Promise.reject(err);
    }
);

axiosInstance.interceptors.response.use(
    async (response) => {
        return response;
    },

    async (err: AxiosError) => {
        return Promise.reject(err);
    }
);

export default axiosInstance;
