import { Header } from "@/components/layout/Header";

const Ranking = () => {
  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="font-cursive text-5xl font-bold text-bookstore-text-dark mb-6">
            Ranking
          </h1>
          <p className="text-xl text-bookstore-text-gray mb-8">
            Descubra os livros mais populares e bem avaliados
          </p>

          <div className="bg-white rounded-lg p-12 shadow-sm">
            <h2 className="text-2xl font-semibold text-bookstore-text-dark mb-4">
              🏆 Página em Construção
            </h2>
            <p className="text-bookstore-text-gray">
              Esta página será desenvolvida em breve com rankings de livros por
              categoria, mais vendidos, mais bem avaliados e tendências atuais!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Ranking;
