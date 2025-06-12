import { Link, useLocation } from "react-router-dom";
import { FiHeart, FiMoreVertical, FiUser } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center p-4 shadow-sm bg-white">
      <div className="text-2xl font-bold italic text-orange-600">
        Livraria do Tavin
      </div>

      <div className="flex gap-4">
        <Link to="/livros">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full">
            Livros
          </button>
        </Link>

        <Link to="/ranking">
          <button className="bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded-full">
            Ranking
          </button>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1 text-sm text-gray-700">
          <FaGoogle /> Login
        </button>
        <FiHeart className="text-xl" />
        <FiUser className="text-xl text-green-500" /> {/* Simulando logado */}
        <FiMoreVertical className="text-xl" />
      </div>
    </header>
  );
}