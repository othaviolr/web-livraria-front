"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Menu, BookOpen, TrendingUp, Bookmark } from "lucide-react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-12 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div
        className="text-2xl font-bold italic text-black cursor-pointer"
        onClick={() => navigate("/")}
      >
        Livraria do Tavin
      </div>

      {/* Navegação */}
      <nav className="flex gap-4">
        <button
          className="flex items-center gap-2 bg-[#DAAA63] text-black border border-black border-opacity-50 px-6 py-1.5 rounded-full text-sm shadow hover:bg-[#DAAA63]/90 transition-colors"
          onClick={() => navigate("/livros")}
          aria-label="Navegar para Livros"
        >
          <BookOpen className="w-4 h-4" />
          Livros
        </button>
        <button
          className="flex items-center gap-2 bg-white text-gray-900 border border-black border-opacity-50 px-6 py-1.5 rounded-full text-sm shadow hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/ranking")}
          aria-label="Navegar para Ranking"
        >
          <TrendingUp className="w-4 h-4" />
          Ranking
        </button>
      </nav>

      {/* Login / Ícones */}
      <div className="flex items-center gap-4">
        {!isLoggedIn ? (
          <button
            onClick={handleLogin}
            className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 px-4 py-2 rounded-full hover:bg-[#DAAA63] hover:bg-opacity-20 transition-colors"
            aria-label="Entrar com Google"
          >
            <img src="/icons/google.svg" alt="Google" className="w-4 h-4" />
            Entrar com Google
          </button>
        ) : (
          <div className="flex items-center gap-5">
            <button aria-label="Favoritos">
              <Bookmark className="w-6 h-6 text-black-700 hover:text-[#DAAA63] transition-colors" />
            </button>

            <button aria-label="Lista de Desejos">
              <Heart className="w-6 h-6 text-black-700 hover:text-[#DAAA63] transition-colors" />
            </button>

            <img
              src="/public/livros/jk.jpg"
              alt="Usuário"
              className="w-9 h-9 rounded-full object-cover border border-gray-300"
            />

            <button aria-label="Menu">
              <Menu className="w-6 h-6 text-black-700 hover:text-[#DAAA63] transition-colors" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}