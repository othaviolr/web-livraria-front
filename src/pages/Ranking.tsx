"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, BookOpen, Calendar, Filter } from "lucide-react";

interface LivroRanking {
  id: number;
  titulo: string;
  autor: string;
  notaMedia: number;
  totalAvaliacoes: number;
  descricao: string;
  imagem: string;
  subindo?: boolean;
}

// Mock com pelo menos 5 itens para cada ranking, pra evitar erro visual
const mocks: Record<string, LivroRanking[]> = {
  maisLidos: [
    {
      id: 1,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      notaMedia: 4.9,
      totalAvaliacoes: 1243,
      descricao: "Uma jornada épica pela Terra Média em busca do Um Anel.",
      imagem: "/livros/novos1.jpg",
      subindo: true,
    },
    {
      id: 6,
      titulo: "O Hobbit",
      autor: "J.R.R. Tolkien",
      notaMedia: 4.7,
      totalAvaliacoes: 980,
      descricao: "A aventura do hobbit Bilbo Bolseiro.",
      imagem: "/livros/novos3.jpg",
    },
    {
      id: 12,
      titulo: "O Código Da Vinci",
      autor: "Dan Brown",
      notaMedia: 4.3,
      totalAvaliacoes: 650,
      descricao: "Mistérios e conspirações em ritmo frenético.",
      imagem: "/livros/novos2.jpg",
    },
    {
      id: 13,
      titulo: "A Culpa é das Estrelas",
      autor: "John Green",
      notaMedia: 4.4,
      totalAvaliacoes: 720,
      descricao: "Uma história emocionante sobre amor e vida.",
      imagem: "/livros/novos1.jpg",
    },
    {
      id: 16,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      notaMedia: 4.8,
      totalAvaliacoes: 1150,
      descricao: "Um clássico encantador que encanta todas as idades.",
      imagem: "/livros/novos2.jpg",
    },
  ],
  maisAvaliados: [
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      notaMedia: 4.8,
      totalAvaliacoes: 982,
      descricao: "Um futuro distópico onde o Grande Irmão tudo vê.",
      imagem: "/livros/novos2.jpg",
    },
    {
      id: 3,
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      notaMedia: 4.7,
      totalAvaliacoes: 847,
      descricao: "O clássico da dúvida eterna: Capitu traiu ou não?",
      imagem: "/livros/novos3.jpg",
      subindo: true,
    },
    {
      id: 14,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      notaMedia: 4.9,
      totalAvaliacoes: 1100,
      descricao: "Um clássico encantador que encanta todas as idades.",
      imagem: "/livros/novos2.jpg",
    },
    {
      id: 15,
      titulo: "Cem Anos de Solidão",
      autor: "Gabriel García Márquez",
      notaMedia: 4.6,
      totalAvaliacoes: 760,
      descricao: "Realismo mágico na saga da família Buendía.",
      imagem: "/livros/novos1.jpg",
    },
    {
      id: 17,
      titulo: "O Morro dos Ventos Uivantes",
      autor: "Emily Brontë",
      notaMedia: 4.5,
      totalAvaliacoes: 670,
      descricao: "Amor e vingança em uma fazenda isolada.",
      imagem: "/livros/novos3.jpg",
    },
  ],
  // Pode adicionar mocks para outros rankings aqui...
};

type RankingKeys = keyof typeof mocks;

export default function Ranking() {
  // Estado seguro para chave do ranking, default maisLidos
  const [tipoRanking, setTipoRanking] = useState<RankingKeys>("maisLidos");

  // Estado filtros
  const [genero, setGenero] = useState("Todos");
  const [ano, setAno] = useState("1º Semestre 2025");
  const [filtroAplicado, setFiltroAplicado] = useState<{ genero: string; ano: string } | null>(null);

  // Ranking filtrado
  const [ranking, setRanking] = useState<LivroRanking[]>([]);

  // Atualiza ranking conforme tipoRanking
  useEffect(() => {
    if (mocks[tipoRanking]) {
      setRanking(mocks[tipoRanking]);
    } else {
      setRanking([]);
    }
  }, [tipoRanking]);

  function aplicarFiltros() {
    // Para mock, só altera filtroAplicado
    if (genero !== "Todos" || ano !== "1º Semestre 2025") {
      setFiltroAplicado({ genero, ano });
    } else {
      setFiltroAplicado(null);
    }
  }

  const baseBtnClasses =
    "flex items-center gap-2 border border-black border-opacity-40 px-6 py-1.5 rounded-full text-sm font-semibold transition-shadow duration-300 ease-in-out";

  const tiposLabels: Record<RankingKeys, string> = {
    maisLidos: "Mais Lidos",
    maisAvaliados: "Mais Avaliados",
    maisComprados: "Mais Comprados",
    melhorPlotTwist: "Melhor Plot Twist",
    melhoresAnalises: "Melhores Análises",
  };

  return (
    <div className="px-8 md:px-32 py-12 max-w-[1440px] mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Ranking de Livros – 1º Semestre 2025</h1>

      {/* Botões tipo ranking */}
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(tiposLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTipoRanking(key as RankingKeys)}
            className={`px-6 py-1.5 rounded-full font-semibold transition-shadow duration-300 ease-in-out border border-black border-opacity-40
              ${
                tipoRanking === key
                  ? "bg-[#DAAA63] text-black shadow-md"
                  : "bg-white text-gray-900 hover:shadow-md"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-gray-600 mb-8 max-w-2xl">
        {`Exibindo ranking: ${tiposLabels[tipoRanking]}. Atualizado com base em notas e popularidade.`}
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
          onClick={aplicarFiltros}
          className={`${baseBtnClasses} bg-[#DAAA63] text-white hover:bg-[#c8944f] max-w-max`}
        >
          <Filter size={16} /> Aplicar filtros
        </button>
      </section>

      {filtroAplicado && (
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Filtros aplicados</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#F8F1E9] text-[#DAAA63] font-semibold rounded-full px-5 py-2 shadow select-none cursor-default">
              Gênero: {filtroAplicado.genero}
            </span>
            <span className="bg-[#F8F1E9] text-[#DAAA63] font-semibold rounded-full px-5 py-2 shadow select-none cursor-default">
              Ano: {filtroAplicado.ano}
            </span>
          </div>
        </section>
      )}

      {/* Cards */}
      <section>
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-5
            gap-x-16
            gap-y-14
            max-w-[1400px]
            mx-auto
          "
        >
          {ranking.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 font-medium py-16">
              Nenhum livro encontrado para este filtro.
            </p>
          ) : (
            ranking.slice(0, 5).map((livro, index) => (
              <Link
                to={`/livros/${livro.id}`}
                key={livro.id}
                className="relative rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition bg-[#F8F1E9] min-w-[220px]"
              >
                <div className="relative">
                  <img
                    src={livro.imagem}
                    alt={livro.titulo}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span
                    className={`absolute top-4 left-4 text-xs font-bold px-5 py-1 rounded-full shadow bg-[#DAAA63] text-white`}
                  >
                    #{index + 1}
                  </span>
                  {livro.subindo && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                      🔥 Subindo
                    </span>
                  )}
                </div>
                <div className="p-8 text-gray-800 overflow-hidden">
                  <h3 className="text-lg font-bold truncate">{livro.titulo}</h3>
                  <p className="text-sm italic truncate">{livro.autor}</p>
                  <p className="text-sm mt-4 break-words">{livro.descricao}</p>
                  <div className="flex items-center gap-3 mt-6">
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
                    <span className="text-sm text-gray-500 ml-3 whitespace-nowrap">
                      ({livro.totalAvaliacoes} avaliações)
                    </span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/ranking/completo"
            className={`${baseBtnClasses} bg-[#DAAA63] text-white hover:bg-[#c8944f] max-w-max inline-block`}
          >
            Ver ranking completo
          </Link>
        </div>
      </section>
    </div>
  );
}
