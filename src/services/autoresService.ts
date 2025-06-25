import api from "./api";

export async function listarAutores(filtro?: string) {
  let url = "/autor";
  if (filtro && filtro.trim() !== "") {
    url += `?filtro=${encodeURIComponent(filtro.trim())}`;
  }
  const response = await api.get(url);
  return response.data.dados;
}

export async function obterAutorPorId(id: number) {
  const response = await api.get(`/autor/${id}`);
  return response.data.dados;
}