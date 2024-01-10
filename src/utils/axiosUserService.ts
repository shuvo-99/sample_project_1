import axios from "axios";

const axiosUserService = axios.create({
    baseURL: "https://aceexam-node-api.mpower-social.com/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },});

    export default axiosUserService;