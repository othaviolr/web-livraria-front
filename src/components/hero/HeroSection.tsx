export default function HeroSection() {
  return (
    <section>
      <h2 className="text-4xl font-bold italic text-black">
        Novos & Tendências
      </h2>
      <p className="text-gray-500 mt-1 mb-4">Explore novos mundos de autores</p>
      {/* barra ajustada */}
      <div className="flex items-center w-full bg-white shadow-md rounded-full px-4 py-2 mt-2 max-w-[280px]">
        <input
          className="flex-1 outline-none bg-transparent text-gray-700"
          type="text"
          placeholder="Livros, autores e editoras"
        />
      </div>
    </section>
  );
}