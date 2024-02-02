import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}api/`,
  headers,
});

export default api;