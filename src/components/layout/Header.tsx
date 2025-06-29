"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { Heart, Bookmark, BookOpen, TrendingUp } from "lucide-react";

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn?: (value: boolean) => void;
}

interface UsuarioPerfil {
  nomeUsuario: string;
  fotoUrl?: string | null;
}

export default function Header({ isLoggedIn, setIsLoggedIn }: HeaderProps) {
  const navigate = useNavigate();
  const [userPhotoUrl, setUserPhotoUrl] = useState<string | null>(null);
  const [showLogout, setShowLogout] = useState(false);

  async function fetchPerfil() {
    const token = localStorage.getItem("token");
    if (!token) {
      setUserPhotoUrl(null);
      return;
    }
    try {
      const response = await fetch("http://localhost:5036/usuarios/perfil", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        setUserPhotoUrl(null);
        return;
      }
      const data: UsuarioPerfil = await response.json();
      setUserPhotoUrl(data.fotoUrl ?? null);
    } catch {
      setUserPhotoUrl(null);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchPerfil();
    } else {
      setUserPhotoUrl(null);
    }
  }, [isLoggedIn]);

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
        if (typeof setIsLoggedIn === "function") setIsLoggedIn(true);

        if (!data.nomeUsuario) {
          navigate("/completar-perfil");
        } else {
          navigate("/");
        }
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
    if (typeof setIsLoggedIn === "function") setIsLoggedIn(false);
    setShowLogout(false);
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-12 py-4 shadow-sm bg-white">
      <div
        className="text-2xl font-bold italic text-black cursor-pointer"
        onClick={() => navigate("/")}
      >
        Livraria do Tavin
      </div>

      <nav className="flex gap-4">
        <button
          className="flex items-center gap-2 bg-[#DAAA63] text-black border border-black border-opacity-50 px-5 py-1 rounded-full text-sm shadow hover:bg-[#c29242] transition-colors"
          onClick={() => navigate("/livros")}
        >
          <BookOpen className="w-4 h-4" />
          Livros
        </button>
        <button
          className="flex items-center gap-2 bg-white text-gray-900 border border-black border-opacity-50 px-5 py-1 rounded-full text-sm shadow hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/ranking")}
        >
          <TrendingUp className="w-4 h-4" />
          Ranking
        </button>
      </nav>

      <div className="relative flex items-center gap-4">
        {!isLoggedIn ? (
          <div className="rounded-full overflow-hidden shadow cursor-pointer">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => alert("Erro ao fazer login com Google")}
              useOneTap
              width="48"
              shape="circle"
            />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-5">
              <button
                aria-label="Favoritos"
                className="hover:text-[#DAAA63] transition-colors"
              >
                <Bookmark className="w-6 h-6 text-black-700" />
              </button>

              <button
                aria-label="Lista de Desejos"
                className="hover:text-[#DAAA63] transition-colors"
              >
                <Heart className="w-6 h-6 text-black-700" />
              </button>

              <button
                onClick={() => setShowLogout((prev) => !prev)}
                className="w-9 h-9 rounded-full overflow-hidden border border-gray-300 p-[1px] focus:outline-none"
                aria-label="Perfil do usuário"
                type="button"
              >
                <img
                  src={userPhotoUrl && userPhotoUrl.trim() !== "" ? userPhotoUrl : "/default-user.png"}
                  alt="Usuário"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
            </div>

            {showLogout && (
              <div className="absolute right-0 top-full mt-2 bg-white border rounded shadow-lg p-2 w-32 z-50">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 hover:bg-[#DAAA63]/20 rounded text-sm font-semibold transition"
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