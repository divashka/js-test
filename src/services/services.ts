import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://66332849f7d50bbd9b485ccb.mockapi.io/';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
  });

  return api;
};