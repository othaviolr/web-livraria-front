"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { listarLivros } from "@/services/livrosService";
import { listarAutores } from "@/services/autoresService";
import { listarEditoras } from "@/services/editorasService";

const exploreOptions = [
  "Lançamentos",
  "Mais avaliados",
  "Destaques",
  "Populares",
  "Por Gênero",
  "Por Ano",
];

export default function Livros() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const editoraIdParam = searchParams.get("editoraId");
  const abaParam = searchParams.get("aba") as "livros" | "autores" | "editoras" | null;

  const editoraId = editoraIdParam ? parseInt(editoraIdParam) : undefined;

  const [activeTab, setActiveTab] = useState<"livros" | "autores" | "editoras">(abaParam ?? "livros");
  const [showExplore, setShowExplore] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [search, setSearch] = useState("");
  const [livros, setLivros] = useState<any[]>([]);
  const [autores, setAutores] = useState<any[]>([]);
  const [editoras, setEditoras] = useState<any[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const livrosPorPagina = 16;
  const exploreRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  async function carregarLivros(filtro?: string, pagina = 1) {
    try {
      setLoading(true);
      const data = await listarLivros(filtro);
      setTotalPaginas(Math.ceil(data.length / livrosPorPagina));
      const inicio = (pagina - 1) * livrosPorPagina;
      const fim = inicio + livrosPorPagina;
      setLivros(data.slice(inicio, fim));
    } catch (error) {
      console.error("Erro ao carregar livros:", error);
      setLivros([]);
      setTotalPaginas(1);
    } finally {
      setLoading(false);
    }
  }

  async function carregarAutores(filtro?: string, pagina = 1) {
    try {
      setLoading(true);
      const data = await listarAutores(filtro, editoraId);
      setTotalPaginas(Math.ceil(data.length / livrosPorPagina));
      const inicio = (pagina - 1) * livrosPorPagina;
      const fim = inicio + livrosPorPagina;
      setAutores(data.slice(inicio, fim));
    } catch (error) {
      console.error("Erro ao carregar autores:", error);
      setAutores([]);
      setTotalPaginas(1);
    } finally {
      setLoading(false);
    }
  }

  async function carregarEditoras(filtro?: string, pagina = 1) {
    try {
      setLoading(true);
      const data = await listarEditoras(filtro);
      setTotalPaginas(Math.ceil(data.length / livrosPorPagina));
      const inicio = (pagina - 1) * livrosPorPagina;
      const fim = inicio + livrosPorPagina;
      setEditoras(data.slice(inicio, fim));
    } catch (error) {
      console.error("Erro ao carregar editoras:", error);
      setEditoras([]);
      setTotalPaginas(1);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (activeTab === "livros") {
      carregarLivros(search, paginaAtual);
    } else if (activeTab === "autores") {
      carregarAutores(search, paginaAtual);
    } else {
      carregarEditoras(search, paginaAtual);
    }
  }, [activeTab, paginaAtual, search, editoraId]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setShowExplore(false);
      }
    }
    if (showExplore) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showExplore]);

  function pesquisar() {
    setPaginaAtual(1);
    setSearch(inputSearch.trim());
  }

  const baseBtnClasses =
    "flex items-center gap-2 border border-black border-opacity-20 px-6 py-1.5 rounded-full text-sm font-semibold transition-shadow duration-300 ease-in-out";

  const tituloPorAba = {
    livros: "Livros em destaque",
    autores: "Autores em destaque",
    editoras: "Editoras em destaque",
  };

  return (
    <div className="px-8 md:px-32 py-10 max-w-[1440px] mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{tituloPorAba[activeTab]}</h1>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <input
          type="text"
          placeholder="Busque por título, autor, editora..."
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") pesquisar();
          }}
          className="w-full md:w-2/3 px-4 py-2 border border-gray-400 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#AA8B46] transition-all bg-white"
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
                    className="w-full text-left px-4 py-2 rounded-md transition-all cursor-pointer hover:bg-[#AA8B46]/10 hover:text-[#AA8B46] font-medium"
                    onClick={() => {
                      setShowExplore(false);
                      console.log("Selecionou:", opt);
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
            onClick={() => {
              setActiveTab(tab as any);
              setPaginaAtual(1);
              setSearch("");
              setInputSearch("");
            }}
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
                <div className="flex flex-col items-center cursor-pointer group rounded-[20px] transition-shadow duration-300 ease-in-out">
                  <div className="overflow-hidden rounded-[20px] shadow-sm">
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
          <div className="flex flex-wrap justify-center gap-10">
            {autores.length === 0 && !loading && (
              <p className="col-span-full text-center text-gray-500">Nenhum autor encontrado.</p>
            )}
            {autores.map((autor) => (
              <Link
                key={autor.id}
                to={`/autores/${autor.id}`}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-sm border border-gray-300 transition-shadow duration-300 ease-in-out group-hover:shadow-lg group-hover:border-[#DAAA63]">
                  <img
                    src={autor.fotoUrl || "/autores/default.jpg"}
                    alt={autor.nome}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 text-center">{autor.nome}</h3>
              </Link>
            ))}
          </div>
        )}

        {activeTab === "editoras" && (
          <div className="flex flex-wrap justify-center gap-10">
            {editoras.length === 0 && !loading && (
              <p className="col-span-full text-center text-gray-500">Nenhuma editora encontrada.</p>
            )}
            {editoras.map((editora) => (
              <Link
                key={editora.id}
                to={`/editoras/${editora.id}`}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-sm border border-gray-300 transition-shadow duration-300 ease-in-out group-hover:shadow-lg group-hover:border-[#DAAA63]">
                  <img
                    src={editora.imagemUrl || "/editoras/default.jpg"}
                    alt={editora.nome}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 text-center">{editora.nome}</h3>
              </Link>
            ))}
          </div>
        )}
      </div>

      {(activeTab === "livros" || activeTab === "autores" || activeTab === "editoras") && (
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={() => setPaginaAtual((p) => Math.max(p - 1, 1))}
            disabled={paginaAtual === 1}
            className="px-4 py-2 rounded-full bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 disabled:opacity-50"
          >
            Anterior
          </button>
          <span className="text-gray-700 font-semibold py-2">
            Página {paginaAtual} de {totalPaginas}
          </span>
          <button
            onClick={() => setPaginaAtual((p) => Math.min(p + 1, totalPaginas))}
            disabled={paginaAtual === totalPaginas}
            className="px-4 py-2 rounded-full bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}