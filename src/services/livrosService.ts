import api from "./api";

export async function listarLivros(filtro?: string) {
  let url = "/livro";
  if (filtro && filtro.trim() !== "") {
    url += `?search=${encodeURIComponent(filtro.trim())}`;
  }
  const response = await api.get(url);
  return response.data.dados;
}

export async function obterLivroPorId(id: number) {
  const response = await api.get(`/livro/${id}`);
  return response.data.dados;
}