import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://note-app-b12b.onrender.com/',
});

export default instance;
