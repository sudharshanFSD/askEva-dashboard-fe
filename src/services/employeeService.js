import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/employees`,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getEmployees = () => API.get("/");

export const createEmployee = (data) => API.post("/", data);

export const updateEmployee = (id, data) =>
  API.put(`/${id}`, data);

export const deleteEmployee = (id) =>
  API.delete(`/${id}`);