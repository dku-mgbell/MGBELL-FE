import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
