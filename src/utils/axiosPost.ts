import axios from "axios";

const axiosPost = axios.create({
  baseURL: "https://aceexam-node-api.mpower-social.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// console.log(process.env.SERVICE_URL);

export default axiosPost;
