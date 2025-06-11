import { Header } from "@/components/Header";

const Livros = () => {
  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="font-cursive text-5xl font-bold text-bookstore-text-dark mb-6">
            Livros
          </h1>
          <p className="text-xl text-bookstore-text-gray mb-8">
            Explore nossa coleção completa de livros
          </p>

          <div className="bg-white rounded-lg p-12 shadow-sm">
            <h2 className="text-2xl font-semibold text-bookstore-text-dark mb-4">
              📚 Página em Construção
            </h2>
            <p className="text-bookstore-text-gray">
              Esta página será desenvolvida em breve com nossa coleção completa
              de livros, filtros de categoria, busca avançada e muito mais!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Livros;
