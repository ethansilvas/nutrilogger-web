import axios from 'axios';

const url = 'http://localhost:5000/search';

export const getFood = () => axios.get(url);
