"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obterEditoraPorId } from "@/services/editorasService";
import { listarAutores } from "@/services/autoresService";

export default function EditoraDetalhe() {
  const { id } = useParams();
  const [editora, setEditora] = useState<any>(null);
  const [autores, setAutores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const editoraData = await obterEditoraPorId(Number(id));
        setEditora(editoraData);

        const autoresData = await listarAutores(undefined, Number(id));
        setAutores(autoresData);
      } catch {
        setError("Erro ao carregar os dados da editora e autores.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <p>Carregando dados da editora...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!editora) return <p>Editora não encontrada.</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <img
        src={editora.imagemUrl || "/editoras/default.jpg"}
        alt={editora.nome}
        className="w-48 h-auto rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{editora.nome}</h1>
      <p className="whitespace-pre-line mb-6">{editora.biografia}</p>

      <h2 className="text-2xl font-semibold mb-4">Autores vinculados</h2>
      {autores.length === 0 ? (
        <p>Nenhum autor encontrado para esta editora.</p>
      ) : (
        <ul className="list-disc list-inside space-y-1">
          {autores.map((autor) => (
            <li key={autor.id}>{autor.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
}