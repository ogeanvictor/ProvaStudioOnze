import axios from 'axios';
import config from '../config/config';

const api = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
});

function setAuthToken(token: string | null) : void {
  api.defaults.headers.common.Authorization = '';
  delete api.defaults.headers.common.Authorization;
  if (token) {
    api.defaults.headers.common.Authorization = token;
  }
}

setAuthToken(
  localStorage.getItem('token') ? localStorage.getItem('token') : null,
);

async function get(apiEndpoint: string) {
  return api.get(apiEndpoint)
    .then((response) => response)
    .catch((err) => err);
}

async function post(apiEndpoint: string, payload: any) {
  return api.post(apiEndpoint, payload)
    .then((response) => response)
    .catch((error) => error.response);
}

function put(apiEndpoint: string, payload: any) {
  return api.put(apiEndpoint, payload)
    .then((response) => response)
    .catch((error) => error.response);
}

function remove(apiEndpoint: string) {
  return api.delete(apiEndpoint)
    .then((response) => response)
    .catch((error) => error.response);
}

const client = {
  get,
  post,
  put,
  remove,
  setAuthToken,
};

export default client;
