import axios from 'axios';

export const rest = axios.create({
  baseURL: 'https://mcdonalds.trio.dev/',
  timeout: 3000,
  headers: {}
});