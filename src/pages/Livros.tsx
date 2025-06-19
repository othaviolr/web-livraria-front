"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const exploreOptions = [
  "Lançamentos",
  "Mais avaliados",
  "Destaques",
  "Populares",
  "Por Gênero",
  "Por Ano",
];

const livros = [
  { id: 1, titulo: "A Sombra do Vento", autor: "Carlos Ruiz Zafón", imagem: "/livros/incipit1.jpg" },
  { id: 2, titulo: "1984", autor: "George Orwell", imagem: "/livros/oblivio2.jpg" },
  { id: 3, titulo: "Dom Casmurro", autor: "Machado de Assis", imagem: "/livros/corrupt.jpg" },
  { id: 4, titulo: "O Hobbit", autor: "J.R.R. Tolkien", imagem: "/livros/hideaway.jpg" },
  { id: 5, titulo: "Ensaio Sobre a Cegueira", autor: "José Saramago", imagem: "/livros/killswith.jpg" },
  { id: 6, titulo: "Capitães da Areia", autor: "Jorge Amado", imagem: "/livros/loveinthedark.jpg" },
  { id: 7, titulo: "Harry Potter", autor: "J.K. Rowling", imagem: "/livros/AssombrandoAdeline.jpg" },
  { id: 8, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", imagem: "/livros/perseguindoadeline.jpg" },
  { id: 9, titulo: "It: A Coisa", autor: "Stephen King", imagem: "/livros/scarlet.png" },
  { id: 10, titulo: "A Revolução dos Bichos", autor: "George Orwell", imagem: "/livros/Twistedbeauty.jpg" },
  { id: 11, titulo: "Memórias Póstumas", autor: "Machado de Assis", imagem: "/livros/Hauntedhearts.jpg" },
  { id: 12, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", imagem: "/livros/punk.jpg" },
  { id: 13, titulo: "O Código Da Vinci", autor: "Dan Brown", imagem: "/livros/Credence.jpg" },
  { id: 14, titulo: "Orgulho e Preconceito", autor: "Jane Austen", imagem: "/livros/knox nigth reapers.png" },
  { id: 15, titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", imagem: "/livros/storm.jpg" },
  { id: 16, titulo: "Verity", autor: "Colleen Hoover", imagem: "/livros/reaper.jpg" },
];

export default function Livros() {
  const [activeTab, setActiveTab] = useState<"livros" | "autores" | "editoras">("livros");
  const [showExplore, setShowExplore] = useState(false);
  const [search, setSearch] = useState("");
  const exploreRef = useRef<HTMLDivElement>(null);

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
          className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DAAA63] transition-all"
        />

        <div className="flex gap-2">
          <button
            onClick={() => console.log("Pesquisar por:", search)}
            className="px-5 py-2 rounded-full bg-[#DAAA63] text-white font-semibold shadow-md border border-black/10 hover:bg-[#DAAA63]/90 hover:border-black/20 transition-all duration-150 ease-linear active:bg-[#DAAA63]/80 active:border-black/30"
          >
            Pesquisar
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
            {livros.map((livro) => (
              <Link key={livro.id} to={`/livros/${livro.id}`}>
                <div className="flex flex-col items-center cursor-pointer group">
                  <div className="overflow-hidden rounded-[20px] shadow-md">
                    <img
                      src={livro.imagem}
                      alt={livro.titulo}
                      className="w-[160px] h-[240px] object-cover rounded-[20px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col items-center mt-3 text-center">
                    <h3 className="text-base font-semibold text-gray-800">{livro.titulo}</h3>
                    <p className="text-sm text-gray-500 mt-1">{livro.autor}</p>
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