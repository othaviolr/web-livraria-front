"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obterEditoraPorId } from "@/services/editorasService";
import { listarAutores } from "@/services/autoresService";
import { listarLivros } from "@/services/livrosService";
import { Book, BookOpen, Users, ArrowLeft } from "lucide-react";

export default function EditoraDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [editora, setEditora] = useState<any | null>(null);
  const [livros, setLivros] = useState<any[]>([]);
  const [autores, setAutores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    let isCancelled = false;

    async function carregarDados() {
      const editoraId = Number(id);
      if (isNaN(editoraId)) {
        console.error("ID da editora inválido:", id);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const [editoraData, todosLivros, autoresDaEditora] = await Promise.all([
          obterEditoraPorId(editoraId),
          listarLivros(),
          listarAutores(undefined, editoraId),
        ]);

        if (isCancelled) return;

        setEditora(editoraData);

        const livrosEditora = todosLivros
          .filter((l) => l.editoraId === editoraId)
          .sort(
            (a, b) =>
              new Date(b.anoPublicacao).getTime() - new Date(a.anoPublicacao).getTime()
          );
        setLivros(livrosEditora);
        setAutores(autoresDaEditora);
      } catch (error) {
        console.error("Erro ao carregar editora:", error);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    carregarDados();

    return () => {
      isCancelled = true;
    };
  }, [id]);

  if (loading)
    return (
      <div className="p-10 text-center text-gray-500">Carregando editora...</div>
    );

  if (!editora)
    return (
      <div className="p-10 text-center text-red-600">Editora não encontrada.</div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-[#DAAA63] font-semibold hover:text-[#c29242]"
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={editora.imagemUrl || "/editoras/default.jpg"}
          alt={editora.nome}
          className="w-60 h-60 object-cover rounded-2xl shadow-md border border-gray-200"
        />

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Book size={28} className="text-[#DAAA63]" /> {editora.nome}
          </h1>

          {editora.biografia && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <BookOpen className="text-[#DAAA63]" size={22} /> Sobre a editora
              </h2>
              <p className="whitespace-pre-line text-justify leading-relaxed text-gray-800">
                {editora.biografia}
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <BookOpen className="text-[#DAAA63]" size={20} />
              <span>
                <strong>{livros.length}</strong> livro(s)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="text-[#DAAA63]" size={20} />
              <span>
                <strong>{autores.length}</strong> autor(es)
              </span>
            </div>

            <button
              onClick={() => navigate(`/livros?aba=autores&editoraId=${id}`)}
              className="text-[#DAAA63] hover:underline font-medium"
            >
              Ver autores
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <BookOpen className="text-[#DAAA63]" size={22} /> Últimos lançamentos
        </h2>

        {livros.length === 0 ? (
          <p className="text-gray-500 italic">Nenhum livro encontrado.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {livros.slice(0, 5).map((livro) => (
              <div
                key={livro.id}
                onClick={() => navigate(`/livros/${livro.id}`)}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div className="overflow-hidden rounded-[20px] shadow-md">
                  <img
                    src={livro.imagemUrl || "/livros/default.jpg"}
                    alt={livro.titulo}
                    className="w-[140px] h-[210px] object-cover rounded-[20px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center mt-3 text-center">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {livro.titulo}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {new Date(livro.anoPublicacao).getFullYear()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {livros.length > 5 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate(`/livros?aba=livros&editoraId=${id}`)}
              className="text-[#DAAA63] font-medium hover:underline"
            >
              Ver todos os lançamentos ({livros.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}