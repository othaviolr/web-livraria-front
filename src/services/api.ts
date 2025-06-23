import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7041/api/livro",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;