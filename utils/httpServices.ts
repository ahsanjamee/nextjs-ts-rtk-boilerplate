import axios, { AxiosRequestConfig } from 'axios';

const API_KEY = '563492ad6f9170000100000166cd3eac6b21433586e426cd94fa8802';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

//axios request interceptor
axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (API_KEY) {
            //eslint-disable-next-line
            // @ts-ignore
            config.headers['Authorization'] = 'Bearer ' + API_KEY;
        }
        return config;
    },
    async (error) => {
        return Promise.reject(error);
    }
);

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
};
