import api from "./api";

export async function listarEditoras(filtro?: string) {
  let url = "/editora";
  if (filtro && filtro.trim() !== "") {
    url += `?filtro=${encodeURIComponent(filtro.trim())}`;
  }
  const response = await api.get(url);
  return response.data.dados;
}

export async function obterEditoraPorId(id: number) {
  const response = await api.get(`/editora/${id}`);
  return response.data.dados;
}