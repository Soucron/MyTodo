import axios from 'axios';

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        'API-KEY': '8785f64a-9272-49cb-9d2b-1b0e4ed880cd'
    }
})