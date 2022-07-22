import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/search' });

export const getFood = (searchQuery) => API.get(`/search?searchQuery=${searchQuery ? searchQuery.search : ''}`);
