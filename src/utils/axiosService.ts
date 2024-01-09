// require('dotenv').config();
import axios from "axios";

const axiosService = axios.create({
  baseURL: "https://api.spacexdata.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// console.log(process.env.SERVICE_URL);

export default axiosService;
