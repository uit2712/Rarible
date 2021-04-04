
import axios from 'axios';

export const API_BASE_URL = 'http://localhost:3939/api';

export const request = axios.create({
    baseURL: API_BASE_URL,
    // withCredentials: false,
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    // }
});