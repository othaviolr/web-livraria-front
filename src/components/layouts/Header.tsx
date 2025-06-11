import { Link } from "react-router-dom";
import { FiHeart, FiMoreVertical, FiUser } from "react-icons/fi";

export default function Header() {
  const isLoggedIn = false; // TODO: substituir por lógica real

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200">
      {/* Esquerda - Logo */}
      <div className="text-2xl font-bold">Livraria do Tavin</div>

      {/* Centro - Botões */}
      <nav className="flex gap-4">
        <Link
          to="/livros"
          className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition"
        >
          Livros
        </Link>
        <Link
          to="/ranking"
          className="bg-white border border-gray-300 text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition"
        >
          Ranking
        </Link>
      </nav>

      {/* Direita - Login, Favoritos, Menu */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        ) : (
          <button
            onClick={() => alert("Implementar login com Google")}
            className="text-sm font-medium text-gray-700 hover:underline"
          >
            Entrar
          </button>
        )}
        <button className="text-xl text-gray-700 hover:text-black">
          <FiHeart />
        </button>
        <button className="text-xl text-gray-700 hover:text-black">
          <FiMoreVertical />
        </button>
      </div>
    </header>
  );
}