import axios from "axios";

const http = axios.create({
  baseURL: "https://mulidroid-backend.onrender.com/",
});

export default http;
