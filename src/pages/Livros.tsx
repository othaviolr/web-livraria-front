"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { listarLivros } from "@/services/livrosService";

const exploreOptions = [
  "Lançamentos",
  "Mais avaliados",
  "Destaques",
  "Populares",
  "Por Gênero",
  "Por Ano",
];

export default function Livros() {
  const [activeTab, setActiveTab] = useState<"livros" | "autores" | "editoras">("livros");
  const [showExplore, setShowExplore] = useState(false);
  const [search, setSearch] = useState("");
  const [livros, setLivros] = useState<any[]>([]);
  const exploreRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  async function carregarLivros(filtro?: string) {
    try {
      setLoading(true);
      const data = await listarLivros(filtro);
      setLivros(data.slice(0, 16));
    } catch (error) {
      console.error("Erro ao carregar livros:", error);
      setLivros([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarLivros();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target as Node)
      ) {
        setShowExplore(false);
      }
    }

    if (showExplore) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showExplore]);

  function pesquisar() {
    carregarLivros(search);
  }

  const baseBtnClasses =
    "flex items-center gap-2 border border-black border-opacity-40 px-6 py-1.5 rounded-full text-sm font-semibold transition-shadow duration-300 ease-in-out";

  return (
    <div className="px-8 md:px-32 py-10 max-w-[1440px] mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Livros em destaque</h1>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <input
          type="text"
          placeholder="Busque por título, autor, editora..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") pesquisar(); }}
          className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAAA63] transition-all"
        />

        <div className="flex gap-2">
          <button
            onClick={pesquisar}
            disabled={loading}
            className={`px-5 py-2 rounded-full bg-[#DAAA63] text-white font-semibold shadow-md border border-black/10 hover:bg-[#DAAA63]/90 hover:border-black/20 transition-all duration-150 ease-linear active:bg-[#DAAA63]/80 active:border-black/30 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Carregando..." : "Pesquisar"}
          </button>

          <div className="relative" ref={exploreRef}>
            <button
              onClick={() => setShowExplore((prev) => !prev)}
              className={`${baseBtnClasses} bg-white text-gray-900 hover:shadow-lg`}
            >
              Explorar <ChevronDown size={16} />
            </button>

            {showExplore && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-xl shadow-lg z-10">
                {exploreOptions.map((opt) => (
                  <button
                    key={opt}
                    className="w-full text-left px-4 py-2 rounded-md transition-all cursor-pointer hover:bg-[#DAAA63]/10 hover:text-[#DAAA63] font-medium"
                    onClick={() => {
                      setShowExplore(false);
                      console.log("Selecionou:", opt);
                      // Implementar filtro pelo exploreOptions aqui futuramente
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        {["livros", "autores", "editoras"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`${baseBtnClasses} ${
              activeTab === tab
                ? "bg-[#DAAA63] text-black shadow-md"
                : "bg-white text-gray-900 hover:shadow-md"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {activeTab === "livros" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {livros.length === 0 && !loading && (
              <p className="col-span-full text-center text-gray-500">Nenhum livro encontrado.</p>
            )}
            {livros.map((livro) => (
              <Link key={livro.id} to={`/livros/${livro.id}`}>
                <div className="flex flex-col items-center cursor-pointer group">
                  <div className="overflow-hidden rounded-[20px] shadow-md">
                    <img
                      src={livro.imagemUrl || "/livros/default.jpg"}
                      alt={livro.titulo}
                      className="w-[160px] h-[240px] object-cover rounded-[20px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col items-center mt-3 text-center">
                    <h3 className="text-base font-semibold text-gray-800">{livro.titulo}</h3>
                    <p className="text-sm text-gray-500 mt-1">{livro.autorNome}</p>
                    <p className="text-xs text-gray-400">{livro.editoraNome}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {activeTab === "autores" && (
          <div className="text-gray-700 font-medium mt-4">Lista de autores aqui...</div>
        )}

        {activeTab === "editoras" && (
          <div className="text-gray-700 font-medium mt-4">Lista de editoras aqui...</div>
        )}
      </div>
    </div>
  );
}