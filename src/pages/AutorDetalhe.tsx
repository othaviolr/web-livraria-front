"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obterAutorPorId } from "@/services/autoresService";
import { listarLivros } from "@/services/livrosService";
import {
  Calendar,
  MapPin,
  BookOpen,
  ArrowLeft,
  Book,
} from "lucide-react";

export default function AutorDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [autor, setAutor] = useState<any | null>(null);
  const [livros, setLivros] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      try {
        setLoading(true);
        const autorData = await obterAutorPorId(Number(id));
        const todosLivros = await listarLivros();

        setAutor(autorData);
        setLivros(todosLivros.filter((l) => l.autorId === Number(id)));
      } catch (error) {
        console.error("Erro ao carregar autor:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) carregarDados();
  }, [id]);

  if (loading)
    return (
      <div className="p-10 text-center text-gray-500">Carregando autor...</div>
    );

  if (!autor)
    return (
      <div className="p-10 text-center text-red-600">Autor não encontrado.</div>
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
        {/* Foto redonda */}
        <img
          src={autor.fotoUrl || "/autores/default.jpg"}
          alt={autor.nome}
          className="w-60 h-60 object-cover rounded-full shadow-md border border-gray-200"
        />

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Book size={28} className="text-[#DAAA63]" /> {autor.nome}
          </h1>

          <div className="flex flex-col gap-4 text-gray-700 text-base">
            {autor.dataNascimento && (
              <div className="flex items-center gap-3">
                <Calendar className="text-[#DAAA63]" size={20} />
                <span>
                  {new Date(autor.dataNascimento).toLocaleDateString()}
                </span>
              </div>
            )}
            {autor.localNascimento && (
              <div className="flex items-center gap-3">
                <MapPin className="text-[#DAAA63]" size={20} />
                <span>{autor.localNascimento}</span>
              </div>
            )}
          </div>

          {autor.biografia && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <BookOpen className="text-[#DAAA63]" size={22} /> Biografia
              </h2>
              <p className="whitespace-pre-line text-justify leading-relaxed text-gray-800">
                {autor.biografia}
              </p>
            </div>
          )}

          <div className="mt-6 flex items-center gap-3 text-gray-700">
            <BookOpen className="text-[#DAAA63]" size={20} />
            <span>
              <strong>{livros.length}</strong> livro(s) publicado(s)
            </span>
          </div>
        </div>
      </div>

      {/* Lista de livros do autor */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <BookOpen className="text-[#DAAA63]" size={22} /> Livros publicados
        </h2>
        {livros.length === 0 ? (
          <p className="text-gray-500 italic">Nenhum livro encontrado.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {livros.map((livro) => (
              <div
                key={livro.id}
                onClick={() => navigate(`/livro/${livro.id}`)}
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
      </div>
    </div>
  );
}