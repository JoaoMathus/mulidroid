import axios from "axios";
import cache from "../utils/cache";

const http = axios.create({
  baseURL: "https://mulidroid-backend.onrender.com/",
});

const get = http.get;
const post = http.post;

export const nosso_get = async (url, params?) => {
  const response = await get(url, params);

  if (response.status === 200) {
    await cache.armazenar(url, response.data);
    return response;
  }

  const data = await cache.resgatar(url);
  return data ? { ok: true, data } : response;
};

export default http;
