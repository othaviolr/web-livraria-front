import { useState } from "react";
import { Heart, Bookmark } from "lucide-react";
import { GoogleLogo } from "@/components/ui/GoogleLogo";

export const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header className="relative bg-white py-4">
      {/* Logo no canto esquerdo da tela */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-cursive font-bold text-bookstore-orange cursor-pointer">
        Livraria do Tavin
      </div>

      {/* Área central dos botões */}
      <nav className="max-w-7xl mx-auto flex justify-center gap-6">
        <button
          className="px-6 py-2 rounded-full font-semibold text-white"
          style={{ backgroundColor: "#DAAA63" }}
          onClick={() => alert("Ir para página Livros")}
        >
          Livros
        </button>
        <button
          className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
          onClick={() => alert("Ir para página Ranking")}
        >
          Ranking
        </button>
      </nav>

      {/* Login / ícones no canto direito da tela */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-6">
        {loggedIn ? (
          <>
            <button
              aria-label="Marcador"
              className="text-gray-600 hover:text-[#DAAA63] transition"
            >
              <Bookmark className="w-5 h-5" />
            </button>
            <button
              aria-label="Lista de desejos"
              className="text-gray-600 hover:text-[#DAAA63] transition"
            >
              <Heart className="w-5 h-5" />
            </button>
            <div className="w-7 h-7 rounded-full bg-[#DAAA63] flex items-center justify-center text-white font-bold cursor-pointer select-none text-sm">
              T
            </div>
          </>
        ) : (
          <button
            onClick={() => setLoggedIn(true)}
            className="flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 text-gray-700 hover:bg-gray-100 transition text-sm"
          >
            <GoogleLogo className="w-4 h-4" />
            <span>Login com Google</span>
          </button>
        )}
      </div>
    </header>
  );
};