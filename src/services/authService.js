import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/auth`,
});

export const loginUser = (userData) => {
  return API.post("/login", userData);
};