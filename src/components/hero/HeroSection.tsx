import { FiSearch } from "react-icons/fi";

export default function HeroSection() {
  return (
    <div className="w-full px-6 py-10 bg-white">
      {/* Seção de busca */}
      <section className="mb-10">
        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl font-bold italic text-gray-900 mb-2">
          Novos & Tendências
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-600 text-lg mb-6">
          Explore novos mundos de autores
        </p>

        {/* Barra de pesquisa */}
        <div className="flex items-center w-full max-w-xl bg-gray-100 rounded-full px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Livros, autores e editora"
            className="flex-1 bg-transparent outline-none text-gray-800 px-2 placeholder-gray-500"
          />
          <FiSearch className="text-gray-500 text-xl" />
        </div>
      </section>

      {/* Seção do pódio de livros */}
      <section className="flex flex-col items-center">
        {/* Livros em pódio */}
        <div className="flex items-end justify-center gap-4">
          {/* Livro da esquerda */}
          <img
            src="https://placehold.co/120x180?text=2º+Livro"
            alt="Livro 2"
            className="w-24 h-36 object-cover rounded-lg shadow-md opacity-80 hover:opacity-100 transition-opacity"
          />

          {/* Livro do meio - destaque */}
          <img
            src="https://placehold.co/140x200?text=1º+Livro"
            alt="Livro 1"
            className="w-32 h-48 object-cover rounded-xl shadow-lg scale-110 z-10 hover:scale-115 transition-transform"
          />

          {/* Livro da direita */}
          <img
            src="https://placehold.co/120x180?text=3º+Livro"
            alt="Livro 3"
            className="w-24 h-36 object-cover rounded-lg shadow-md opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Título abaixo do pódio */}
        <h2 className="mt-4 text-2xl italic font-semibold text-gray-800">
          Dark Romance
        </h2>
      </section>
    </div>
  );
}