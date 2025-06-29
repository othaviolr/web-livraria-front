"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { Heart, Menu, BookOpen, TrendingUp, Bookmark, X } from "lucide-react";

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn?: (value: boolean) => void; // opcional para prevenir erro
}

export default function Header({ isLoggedIn, setIsLoggedIn }: HeaderProps) {
  const navigate = useNavigate();
  const [userPhotoUrl, setUserPhotoUrl] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // controla menu hamburguer

  const handleLoginSuccess = async (credentialResponse: any) => {
    try {
      const idToken = credentialResponse.credential;

      const response = await fetch("http://localhost:5036/auth/login-google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);

        if (typeof setIsLoggedIn === "function") {
          setIsLoggedIn(true);
        }

        const base64Payload = data.token.split(".")[1];
        const payload = JSON.parse(atob(base64Payload));
        if (payload.fotoUrl) setUserPhotoUrl(payload.fotoUrl);

        navigate("/completar-perfil");
      } else {
        alert("Falha no login: " + data.message);
      }
    } catch (error: any) {
      alert("Erro no login com Google: " + error.message);
    }
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("token");
    if (typeof setIsLoggedIn === "function") {
      setIsLoggedIn(false);
    }
    setIsMenuOpen(false);
    navigate("/");
  };

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
        >
          <BookOpen className="w-4 h-4" />
          Livros
        </button>
        <button
          className="flex items-center gap-2 bg-white text-gray-900 border border-black border-opacity-50 px-6 py-1.5 rounded-full text-sm shadow hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/ranking")}
        >
          <TrendingUp className="w-4 h-4" />
          Ranking
        </button>
      </nav>

      {/* Login / Ícones */}
      <div className="relative flex items-center gap-4">
        {!isLoggedIn ? (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => alert("Erro ao fazer login com Google")}
            useOneTap
          />
        ) : (
          <>
            <div className="flex items-center gap-5">
              <button aria-label="Favoritos">
                <Bookmark className="w-6 h-6 text-black-700 hover:text-[#DAAA63] transition-colors" />
              </button>

              <button aria-label="Lista de Desejos">
                <Heart className="w-6 h-6 text-black-700 hover:text-[#DAAA63] transition-colors" />
              </button>

              <img
                src={userPhotoUrl ?? "/livros/jk.jpg"}
                alt="Usuário"
                className="w-9 h-9 rounded-full object-cover border border-gray-300"
              />

              <button
                aria-label="Menu"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-black-700 hover:text-[#DAAA63] transition-colors" />
                ) : (
                  <Menu className="w-6 h-6 text-black-700 hover:text-[#DAAA63] transition-colors" />
                )}
              </button>
            </div>

            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border rounded shadow-lg p-4 w-40 z-50">
                {/* Aqui pode colocar mais opções do menu */}
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-2 py-1 hover:bg-[#DAAA63]/20 rounded"
                >
                  Sair
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}