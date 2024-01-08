import axios from "axios";

const axiosService = axios.create({
  baseURL: process.env.SERVICE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosService;
