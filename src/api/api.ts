import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    "Allow-Control-Allow-Origin": "*",
  },
});

export default api;
