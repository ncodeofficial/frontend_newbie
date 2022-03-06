import axios from 'axios';
export const BASE_PATH = 'https://quotation-api-cdn.dunamu.com/v1';

export const API = axios.create({ baseURL: BASE_PATH });
