import axios from "axios";

const BASE_URL = "http://localhost:3000/users";

export const loginApi = data =>
  axios.post(`${BASE_URL}/login`, data);

export const registerApi = data =>
  axios.post(BASE_URL, data);
