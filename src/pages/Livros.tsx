"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

  return (
    <div className="px-8 md:px-32 py-10 max-w-[1440px] mx-auto">
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Livros em destaque</h1>

      {/* Barra de Pesquisa, Pesquisar e Explorar */}
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
            className="px-4 py-2 rounded-full bg-[#DAAA63] text-white font-medium shadow hover:shadow-md transition-all"
          >
            Pesquisar
          </button>

          <div className="relative">
            <button
              onClick={() => setShowExplore((prev) => !prev)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full bg-white shadow-sm hover:bg-gray-100 transition-all text-gray-700"
            >
              Explorar <ChevronDown size={16} />
            </button>

            {showExplore && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-xl shadow-lg z-10">
                {exploreOptions.map((opt) => (
                  <button
                    key={opt}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-all rounded-md"
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

      {/* Tabs */}
      <div className="mt-10 flex gap-4">
        {["livros", "autores", "editoras"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-5 py-2 rounded-full font-medium transition-all border ${
              activeTab === tab
                ? "bg-[#DAAA63] text-white border-[#DAAA63] shadow-md"
                : "bg-white text-[#DAAA63] border-[#DAAA63] hover:bg-[#DAAA63] hover:text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Conteúdo Dinâmico */}
      <div className="mt-10">
        {activeTab === "livros" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={`/livros/novos${(i % 3) + 1}.jpg`}
                  alt="Livro"
                  className="w-[160px] h-[240px] object-cover rounded-[20px] shadow-md hover:shadow-lg transition-shadow"
                />

                <div className="flex flex-col items-center mt-3">
                  <h3 className="text-base font-semibold text-gray-800 text-center">
                    Título do Livro
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Autor Exemplo</p>
                </div>
              </div>
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