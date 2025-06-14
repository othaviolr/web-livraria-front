"use client";

import { useState } from "react";
import { Heart, User, Menu } from "lucide-react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-12 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold italic text-black-600">
        Livraria do Tavin
      </div>

      {/* Botões de navegação */}
      <nav className="flex gap-4">
        <button 
          className="bg-[#DAAA63] text-white border border-black border-opacity-50 px-4 py-2 rounded-full text-sm shadow hover:bg-[#DAAA63]/90 transition-colors"
          aria-label="Navegar para Livros"
        >
          Livros
        </button>
        <button 
          className="bg-white text-gray-900 border border-black border-opacity-50 px-4 py-2 rounded-full text-sm shadow hover:bg-gray-50 transition-colors"
          aria-label="Navegar para Ranking"
        >
          Ranking
        </button>
      </nav>

      {/* Login / Ícones */}
      <div className="flex items-center gap-4">
        {!isLoggedIn ? (
          <button
            onClick={handleLogin}
            className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Entrar com Google"
          >
            <img
              src="/icons/google.svg"
              alt="Google"
              className="w-4 h-4"
            />
            Entrar com Google
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <button aria-label="Favoritos">
              <Heart className="w-5 h-5 text-gray-700 hover:text-orange-600 cursor-pointer transition-colors" />
            </button>
            <button aria-label="Perfil">
              <User className="w-5 h-5 text-gray-700 hover:text-orange-600 cursor-pointer transition-colors" />
            </button>
            <button aria-label="Menu">
              <Menu className="w-5 h-5 text-gray-700 hover:text-orange-600 cursor-pointer transition-colors" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}