import axios from "axios";

const autoresApi = axios.create({
  baseURL: "https://localhost:7041/api/autor",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function listarAutores(filtro?: string) {
  let url = "";
  if (filtro && filtro.trim() !== "") {
    url = `?search=${encodeURIComponent(filtro.trim())}`;
  }
  const response = await autoresApi.get(url);
  return response.data.dados;
}

export async function obterAutorPorId(id: number) {
  const response = await autoresApi.get(`/${id}`);
  return response.data.dados;
}