import axios from 'axios';

export default axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    apikey: process.env.REACT_APP_PUBLIC_KEY,
  },
});
