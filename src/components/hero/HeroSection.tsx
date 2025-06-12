import { FiSearch } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="px-12 pt-12">
      <h2 className="text-4xl text-orange-600 font-bold italic">
        Novos & Tendências
      </h2>
      <p className="text-gray-500 mt-1 mb-4">
        Explore novos mundos de autores
      </p>

      <div className="flex items-center w-full max-w-xl bg-white shadow-md rounded-full px-4 py-2 mt-2">
        <input
          className="flex-1 outline-none bg-transparent text-gray-700"
          type="text"
          placeholder="Livros, autores e editoras"
        />
        <FiSearch className="text-xl text-orange-500" />
      </div>
    </section>
  );
}