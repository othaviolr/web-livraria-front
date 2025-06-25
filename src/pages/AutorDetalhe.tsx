"use client";

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { obterAutorPorId } from "@/services/autoresService";
import { Calendar, MapPin, User, BookOpen, ArrowLeft } from "lucide-react";

export default function AutorDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [autor, setAutor] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchAutor() {
      try {
        setLoading(true);
        setError(null);

        const data = await obterAutorPorId(Number(id));
        setAutor(data);
      } catch (e) {
        setError("Erro ao carregar dados do autor.");
      } finally {
        setLoading(false);
      }
    }

    fetchAutor();
  }, [id]);

  if (loading)
    return (
      <div className="p-10 text-center text-gray-500">Carregando autor...</div>
    );

  if (error)
    return (
      <div className="p-10 text-center text-red-600 font-semibold">{error}</div>
    );

  if (!autor)
    return (
      <div className="p-10 text-center text-gray-600 italic">
        Autor não encontrado.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Botão voltar */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-[#DAAA63] font-semibold hover:text-[#c29242] transition"
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Foto do autor */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <img
            src={autor.fotoUrl || "/autores/default.jpg"}
            alt={autor.nome}
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-3xl shadow-lg border border-gray-200"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col justify-start">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">{autor.nome}</h1>

          {autor.biografia ? (
            <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-6 text-lg">
              {autor.biografia}
            </p>
          ) : (
            <p className="text-gray-500 italic mb-6">Biografia não disponível.</p>
          )}

          {/* Informações adicionais */}
          <div className="flex flex-col gap-4 text-gray-600 text-base max-w-md">
            {autor.dataNascimento && (
              <div className="flex items-center gap-3">
                <Calendar className="text-[#DAAA63]" size={20} />
                <span>
                  <strong>Data de nascimento:</strong>{" "}
                  {new Date(autor.dataNascimento).toLocaleDateString()}
                </span>
              </div>
            )}

            {autor.localNascimento && (
              <div className="flex items-center gap-3">
                <MapPin className="text-[#DAAA63]" size={20} />
                <span>
                  <strong>Local de nascimento:</strong> {autor.localNascimento}
                </span>
              </div>
            )}

            {autor.generos && autor.generos.length > 0 && (
              <div className="flex items-center gap-3">
                <BookOpen className="text-[#DAAA63]" size={20} />
                <span>
                  <strong>Gêneros:</strong> {autor.generos.join(", ")}
                </span>
              </div>
            )}

            {/* Você pode adicionar mais informações aqui, como número de livros publicados, prêmios, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
}