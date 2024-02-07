import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  // Authorization: `Bearer ${process.env.API_TOKEN}`,
};

// const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}api/`;

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
  headers,
});

export default api;
