"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obterEditoraPorId } from "@/services/editorasService";

export default function EditoraDetalhe() {
  const { id } = useParams();
  const [editora, setEditora] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchEditora() {
      setLoading(true);
      setError(null);
      try {
        const data = await obterEditoraPorId(Number(id));
        setEditora(data);
      } catch {
        setError("Erro ao carregar a editora.");
      } finally {
        setLoading(false);
      }
    }

    fetchEditora();
  }, [id]);

  if (loading) return <p>Carregando editora...</p>;
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
      {/* Pode adicionar lista de livros publicados, etc */}
    </div>
  );
}