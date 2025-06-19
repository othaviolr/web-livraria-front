"use client";

import { useState } from "react";
import {
  Star,
  Heart,
  Bookmark,
  Eye,
  Users,
  Clock,
  BookOpen,
  Globe,
  Calendar,
  Layers,
  ArrowLeft,
} from "lucide-react";

export default function LivroDetalhe() {
  const [favoritos, setFavoritos] = useState(7);
  const [desejados, setDesejados] = useState(40);
  const [avaliaram, setAvaliaram] = useState(467);

  const abas = ["Sinopse", "Edições", "Similares", "Leia online (PDF)"];
  const [abaAtiva, setAbaAtiva] = useState("Sinopse");

  const handleFavoritar = () => setFavoritos((f) => f + 1);
  const handleDesejar = () => setDesejados((d) => d + 1);
  const handleAvaliar = () => setAvaliaram((a) => a + 1);

  const baseBtnClasses =
    "flex items-center gap-2 border border-black border-opacity-40 px-6 py-1.5 rounded-full text-sm font-semibold transition-shadow duration-300 ease-in-out cursor-pointer";

  // Simulação de comentários
  const comentarios = [
    {
      id: 1,
      nome: "Leitor 1",
      estrelas: 5,
      texto:
        "Excelente leitura, recomendo demais! A escrita da autora é viciante e o suspense prende até a última página.",
    },
    {
      id: 2,
      nome: "Leitor 2",
      estrelas: 4,
      texto: "Muito bom, suspense na medida certa e personagens cativantes.",
    },
    {
      id: 3,
      nome: "Leitor 3",
      estrelas: 4,
      texto: "Gostei demais do ritmo e das reviravoltas da história.",
    },
  ];

  const totalComentarios = comentarios.length;

  const handleLerMais = () => {
    alert("Carregar mais comentários...");
  };

  return (
    <div className="max-w-[1200px] mx-auto p-8 flex flex-col md:flex-row gap-10">
      {/* Botão Voltar */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 mb-6 text-[#DAAA63] font-semibold hover:text-[#c29242] transition"
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      {/* Imagem do livro */}
      <div className="flex-shrink-0">
        <img
          src="/livros/novos1.jpg"
          alt="O Acidente (eBook)"
          className="rounded-2xl shadow-lg w-[260px] md:w-[300px]"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        {/* Título e info básica */}
        <h1 className="text-3xl font-extrabold text-gray-900">O Acidente (eBook)</h1>
        <p className="text-lg text-[#4b4b4b] italic mt-1">Esse é só o início do pesadelo</p>

        {/* Informações estilizadas */}
        <div className="mt-5 flex flex-wrap gap-6 text-[#3a3a3a] text-sm font-medium max-w-[400px]">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-[#DAAA63]" />
            <span>Freida McFadden</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-[#DAAA63]" />
            <span>Ano: 2025</span>
            <span className="mx-1 text-gray-400">/</span>
            <span>Páginas: 350</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe size={18} className="text-[#DAAA63]" />
            <span>Idioma: português</span>
          </div>

          <div className="flex items-center gap-2">
            <Layers size={18} className="text-[#DAAA63]" />
            <span>Editora: Record</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} className="text-[#DAAA63]" />
            <span>Média de leitura: 7h 30min</span>
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

        {/* Conteúdo da aba ativa */}
        <section className="mt-6 text-[#4b4b4b] leading-relaxed max-w-[700px] min-h-[120px]">
          {abaAtiva === "Sinopse" && (
            <>
              <h2 className="text-2xl font-semibold mb-3">Sinopse</h2>
              <p>
                Tegan está fugindo de um pesadelo, mas não imagina que o caminho que
                ela escolhe é apenas o começo de um destino ainda mais sombrio. O
                acidente é um thriller tenso e sinistro de Freida McFadden,
                autora best-seller de A empregada, que deixa o leitor com medo de
                virar cada página.
              </p>
              <p className="mt-4 italic text-sm text-gray-600">
                Ficção / Literatura Estrangeira / Suspense e Mistério
              </p>
            </>
          )}

          {abaAtiva === "Edições" && (
            <>
              <h2 className="text-2xl font-semibold mb-3">Edições</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>O Acidente (Impresso)</li>
                <li>O Acidente (eBook)</li>
                <li>O Acidente (Audiobook)</li>
              </ul>
            </>
          )}

          {abaAtiva === "Similares" && (
            <>
              <h2 className="text-2xl font-semibold mb-3">Livros Similares</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Angústia - Autor X</li>
                <li>Até Você Ser Minha - Autor Y</li>
              </ul>
            </>
          )}

          {abaAtiva === "Leia online (PDF)" && (
            <>
              <h2 className="text-2xl font-semibold mb-3">Leia Online (PDF)</h2>
              <p>
                Disponível para leitura online em formato PDF. <br />
                <a
                  href="/livros/o-acidente.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DAAA63] font-semibold hover:underline"
                >
                  Abrir PDF
                </a>
              </p>
            </>
          )}
        </section>

        {/* Estatísticas */}
        <div className="mt-10 flex flex-wrap gap-8 text-[#3a3a3a]">
          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Star className="text-yellow-400" />
              3.3
              <span className="text-gray-500 font-normal ml-1"> avaliações (467)</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">Resenhas: 168</div>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Bookmark />
              Favoritos: {favoritos}
            </div>
            <div className="text-sm text-gray-500 mt-1">Desejados: {desejados}</div>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Eye />
              Lendo: 100
            </div>
            <div className="text-sm text-gray-500 mt-1">Leram: 567</div>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Users />
              Leitores: 78
            </div>
            <div className="text-sm text-gray-500 mt-1">Querem ler: 545</div>
          </div>
        </div>

        {/* Botões de ação atualizados */}
        <div className="mt-8 flex gap-6 flex-wrap">
          <button
            onClick={handleFavoritar}
            className={`${baseBtnClasses} bg-[#DAAA63] text-white shadow-md hover:bg-[#c29242]`}
          >
            <Heart size={20} /> Favoritar
          </button>

          <button
            onClick={handleDesejar}
            className={`${baseBtnClasses} bg-white text-[#DAAA63] border-[#DAAA63] hover:shadow-md`}
          >
            Adicionar à lista de desejos
          </button>

          <button
            onClick={handleAvaliar}
            className={`${baseBtnClasses} bg-white text-[#DAAA63] border-[#DAAA63] hover:shadow-md`}
          >
            Avaliar
          </button>
        </div>

        {/* Comentários e Reviews */}
        <div className="mt-14 max-w-[700px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Comentários / Reviews ({totalComentarios})
          </h2>

          <div className="flex flex-col gap-6">
            {comentarios.map(({ id, nome, estrelas, texto }) => (
              <div
                key={id}
                className="bg-[#F8F1E9] border border-[#e1d2be] p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div>
                    <span className="font-semibold text-gray-800">{nome}</span>
                    <div className="flex items-center gap-1 text-yellow-400 mt-1">
                      {[...Array(estrelas)].map((_, i) => (
                        <Star key={i} size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-[15px] leading-relaxed">{texto}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleLerMais}
            className="mt-6 px-5 py-2 rounded-full border border-[#DAAA63] text-[#DAAA63] font-semibold hover:bg-[#DAAA63] hover:text-white transition"
          >
            Ler mais comentários
          </button>
        </div>
      </div>
    </div>
  );
}