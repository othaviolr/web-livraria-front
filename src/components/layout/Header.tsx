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
      <div className="text-2xl font-bold italic text-orange-600">
        Livraria do Tavin
      </div>

      {/* Botões de navegação */}
      <div className="flex gap-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm shadow">
          Livros
        </button>
        <button className="bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded-full text-sm shadow">
          Ranking
        </button>
      </div>

      {/* Login / Ícones */}
      <div className="flex items-center gap-4">
        {!isLoggedIn ? (
          <button
            onClick={handleLogin}
            className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100"
          >
            <img
              src="/icons/google.svg"
              alt="Google"
              className="w-4 h-4"
            />
            Entrar com Google
          </button>
        ) : (
          <>
            <Heart className="w-5 h-5 text-gray-700 hover:text-orange-600 cursor-pointer" />
            <User className="w-5 h-5 text-gray-700 hover:text-orange-600 cursor-pointer" />
            <Menu className="w-5 h-5 text-gray-700 hover:text-orange-600 cursor-pointer" />
          </>
        )}
      </div>
    </header>
  );
}