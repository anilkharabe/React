import axios from "axios";

const BASE_URL = `${process.env.API_BASE_URL}/users`;

export const loginApi = data =>
  axios.post(`${BASE_URL}/login`, data);

export const registerApi = data =>
  axios.post(BASE_URL, data);
