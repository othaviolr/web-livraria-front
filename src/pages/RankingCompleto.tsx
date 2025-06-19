"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, BookOpen, Calendar, Filter, ChevronLeft, ChevronRight } from "lucide-react";

interface LivroRanking {
  id: number;
  titulo: string;
  autor: string;
  notaMedia: number;
  totalAvaliacoes: number;
  descricao: string;
  imagem: string;
}

const mockRankingCompleto: LivroRanking[] = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  titulo: `Livro Exemplo ${i + 1}`,
  autor: `Autor ${i + 1}`,
  notaMedia: 4 + (i % 5) * 0.1,
  totalAvaliacoes: 200 + i * 10,
  descricao: "Descrição breve do livro para dar um gostinho ao usuário.",
  imagem: `/livros/novos${(i % 3) + 1}.jpg`,
}));

export default function RankingCompleto() {
  const [ranking, setRanking] = useState<LivroRanking[]>([]);
  const [genero, setGenero] = useState("Todos");
  const [ano, setAno] = useState("1º Semestre 2025");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 10;

  useEffect(() => {
    // Aqui você aplicaria os filtros e buscaria dados reais da API.
    setRanking(mockRankingCompleto);
  }, []);

  // Filtra localmente (mock)
  const rankingFiltrado = ranking.filter((livro) => {
    const condGenero = genero === "Todos" || genero === "Fantasia"; // mock só fantasia
    const condAno = ano === "Todos" || ano === "1º Semestre 2025"; // mock simplificado
    return condGenero && condAno;
  });

  const totalPaginas = Math.ceil(rankingFiltrado.length / itensPorPagina);
  const rankingPagina = rankingFiltrado.slice(
    (paginaAtual - 1) * itensPorPagina,
    paginaAtual * itensPorPagina
  );

  const baseBtnClasses =
    "flex items-center gap-2 border border-black border-opacity-40 px-6 py-1.5 rounded-full text-sm font-semibold transition-shadow duration-300 ease-in-out";

  function irParaPagina(pagina: number) {
    if (pagina >= 1 && pagina <= totalPaginas) setPaginaAtual(pagina);
  }

  return (
    <div className="px-8 md:px-32 py-12 max-w-[1440px] mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Ranking Completo de Livros</h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Confira todos os livros avaliados com filtros detalhados e ordenação.
      </p>

      {/* Filtros */}
      <section className="mb-12 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#DAAA63]" />
          <select
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            className="border border-gray-300 rounded-full px-5 py-2 text-sm shadow-sm focus:outline-none"
          >
            <option>Todos</option>
            <option>Fantasia</option>
            <option>Romance</option>
            <option>Distopia</option>
            <option>Terror</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#DAAA63]" />
          <select
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            className="border border-gray-300 rounded-full px-5 py-2 text-sm shadow-sm focus:outline-none"
          >
            <option>1º Semestre 2025</option>
            <option>2º Semestre 2025</option>
            <option>1º Semestre 2024</option>
            <option>2º Semestre 2024</option>
            <option>Todos</option>
          </select>
        </div>

        <button
          onClick={() => setPaginaAtual(1)}
          className={`${baseBtnClasses} bg-[#DAAA63] text-white hover:bg-[#c8944f]`}
        >
          <Filter size={16} /> Aplicar filtros
        </button>
      </section>

      {/* Lista */}
      <div className="flex flex-col gap-8">
        {rankingPagina.map((livro, i) => (
          <Link
            key={livro.id}
            to={`/livros/${livro.id}`}
            className="flex gap-6 p-6 rounded-2xl shadow-md hover:shadow-xl transition bg-[#F8F1E9]"
          >
            <img
              src={livro.imagem}
              alt={livro.titulo}
              className="w-32 h-48 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{livro.titulo}</h2>
                <p className="italic text-gray-600 mb-2">{livro.autor}</p>
                <p className="text-gray-700">{livro.descricao}</p>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${
                        star <= Math.round(livro.notaMedia)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xl font-bold text-yellow-600">{livro.notaMedia.toFixed(1)}</span>
                <span className="text-gray-600 font-semibold whitespace-nowrap">
                  ({livro.totalAvaliacoes} avaliações)
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={() => irParaPagina(paginaAtual - 1)}
          disabled={paginaAtual === 1}
          className={`${baseBtnClasses} px-4 py-2 disabled:opacity-50`}
          aria-label="Página anterior"
        >
          <ChevronLeft />
        </button>

        <span className="text-gray-700 font-semibold">
          Página {paginaAtual} de {totalPaginas}
        </span>

        <button
          onClick={() => irParaPagina(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
          className={`${baseBtnClasses} px-4 py-2 disabled:opacity-50`}
          aria-label="Próxima página"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}