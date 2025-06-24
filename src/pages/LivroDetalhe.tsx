"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  Clock,
  Globe,
  Layers,
  ArrowLeft,
} from "lucide-react";
import { obterLivroPorId } from "@/services/livrosService";

export default function LivroDetalhe() {
  const { id } = useParams<{ id: string }>();
  const [livro, setLivro] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [exibirMais, setExibirMais] = useState(false);

  const abas = ["Sinopse", "Edições", "Similares", "Leia online (PDF)"];
  const [abaAtiva, setAbaAtiva] = useState("Sinopse");

  useEffect(() => {
    async function carregarLivro() {
      try {
        const data = await obterLivroPorId(Number(id));
        setLivro(data);
      } catch (error) {
        console.error("Erro ao buscar livro:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarLivro();
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center text-gray-500">Carregando livro...</div>;
  }

  if (!livro) {
    return <div className="p-10 text-center text-red-500">Livro não encontrado.</div>;
  }

  const paragrafoFormatado = (texto: string) => {
    const paragrafos = texto.split("\n").filter((p) => p.trim() !== "");
    const limite = 5;
    const mostrarTodos = exibirMais || paragrafos.length <= limite;

    return (
      <div className="flex flex-col gap-4">
        {paragrafos
          .slice(0, mostrarTodos ? paragrafos.length : limite)
          .map((paragrafo, index) => {
            const palavras = paragrafo.trim().split(" ");
            const ehFraseDeImpacto = palavras.length <= 6;

            return (
              <p key={index} className="text-justify leading-relaxed text-[16px] text-[#333]">
                {ehFraseDeImpacto ? <strong>{paragrafo}</strong> : paragrafo}
              </p>
            );
          })}

        {paragrafos.length > limite && (
          <button
            onClick={() => setExibirMais(!exibirMais)}
            className="text-[#DAAA63] font-semibold mt-2 hover:underline self-start"
          >
            {exibirMais ? "Exibir menos" : "Leia mais"}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto p-8 flex flex-col md:flex-row gap-10">
      {/* Voltar */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 mb-6 text-[#DAAA63] font-semibold hover:text-[#c29242] transition"
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      {/* Capa */}
      <div className="flex-shrink-0">
        <img
          src={livro.imagemUrl || "/livros/default.jpg"}
          alt={livro.titulo}
          className="rounded-2xl shadow-lg w-[260px] md:w-[300px]"
        />
      </div>

      {/* Informações */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-extrabold text-gray-900">{livro.titulo}</h1>
        <p className="text-lg text-[#4b4b4b] italic mt-1">Dark Romance</p>

        <div className="mt-5 flex flex-wrap gap-6 text-[#3a3a3a] text-sm font-medium max-w-[400px]">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-[#DAAA63]" />
            <span>{livro.autorNome}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-[#DAAA63]" />
            <span>Ano: {new Date(livro.anoPublicacao).getFullYear()}</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe size={18} className="text-[#DAAA63]" />
            <span>Idioma: Português</span>
          </div>

          <div className="flex items-center gap-2">
            <Layers size={18} className="text-[#DAAA63]" />
            <span>Editora: {livro.editoraNome}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} className="text-[#DAAA63]" />
            <span>Média de leitura: ~7h</span>
          </div>
        </div>

        {/* Abas */}
        <div className="mt-10 border-b border-gray-300 flex gap-6">
          {abas.map((aba) => (
            <button
              key={aba}
              onClick={() => setAbaAtiva(aba)}
              className={`py-2 font-semibold border-b-4 transition ${
                abaAtiva === aba
                  ? "text-[#DAAA63] border-[#DAAA63]"
                  : "text-gray-600 border-transparent hover:text-[#DAAA63] hover:border-[#DAAA63]"
              }`}
            >
              {aba}
            </button>
          ))}
        </div>

        <div className="mt-6 text-[#4b4b4b] leading-relaxed max-w-[700px] min-h-[120px]">
          {abaAtiva === "Sinopse" ? (
            livro.sinopse && livro.sinopse.trim() !== "" ? (
              paragrafoFormatado(livro.sinopse)
            ) : (
              <p>Este livro ainda não possui sinopse cadastrada.</p>
            )
          ) : (
            <p>Conteúdo da aba: {abaAtiva}</p>
          )}
        </div>
      </div>
    </div>
  );
}