import api from "./api";

export async function listarAutores(filtro?: string, editoraId?: number) {
  let url = "/autor";
  const params = new URLSearchParams();

  if (filtro && filtro.trim() !== "") {
    params.append("filtro", filtro.trim());
  }

  if (editoraId !== undefined && editoraId !== null) {
    params.append("editoraId", editoraId.toString());
  }

  const queryString = params.toString();
  if (queryString) {
    url += `?${queryString}`;
  }

  const response = await api.get(url);
  return response.data.dados;
}

export async function obterAutorPorId(id: number) {
  const response = await api.get(`/autor/${id}`);
  return response.data.dados;
}