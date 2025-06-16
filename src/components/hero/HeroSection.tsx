import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section>
      <h2 className="text-6xl font-luxurious">Novos & Tendências</h2>
      <p className="text-gray-500 mt-1 mb-4">Explore novos mundos de autores</p>

      <div className="relative w-full max-w-[280px] mt-2">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
        <input
          className="w-full pl-12 pr-4 py-2 rounded-full border border-black/20 bg-white/60 text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#DAAA63] transition"
          type="text"
          placeholder="Livros, autores e editoras"
        />
      </div>
    </section>
  );
}