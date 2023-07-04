import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("Token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login"; // Redirect to the login page
    }
    return Promise.reject(error);
  }
);

export default api;
