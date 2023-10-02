import axios from "axios";

const api = axios.create({
  baseURL: "https://riotfy.onrender.com",
  timeout: 7000,
});

export default api;
