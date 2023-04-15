import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '../config/storageKey';

const client = axios.create({
  baseURL: 'https://jury-dao-dev.by-catze.xyz',
});

// request interceptor
client.interceptors.request.use((config) => {
  // do something before request is sent

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

client.interceptors.response.use((response) => {
  // do something before response is received
  return response;
});

export default client;
