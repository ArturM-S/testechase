import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://testechase.vercel.app/api',
});
