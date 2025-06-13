import { AuthorOfTheYearCard } from "@/components/spotlight/AuthorOfTheYearCard";
import { KoreanLiteratureCard } from "@/components/spotlight/KoreanLiteratureCard";
import { PodiumBooks } from "@/components/hero/PodiumBooks";
import type { Book } from "@/types/Book";

interface HomeHighlightsProps {
  books: [Book, Book, Book];
}

export function HomeHighlights({ books }: HomeHighlightsProps) {
  return (
    <section className="relative w-full h-[600px] flex">
      {/* Lado esquerdo: Título e barra de pesquisa */}
      <div className="absolute top-[153px] left-0 px-16">
        <h2 className="text-4xl text-orange-600 font-bold italic">
          Novos & Tendências
        </h2>
        <p className="text-gray-500 mt-1 mb-4">
          Explore novos mundos de autores
        </p>

        <div className="mt-2 w-[360px]">
          {/* largura reduzida da SearchBar */}
          <input
            type="text"
            placeholder="Livros, autores e editoras"
            className="w-full px-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Lado direito: Cards */}
      <div className="absolute top-[153px] left-[430px] flex gap-[50px]">
        <div className="w-[550px]">
          <PodiumBooks books={books} />
        </div>

        <div className="mt-[131px]"> {/* alinhamento vertical: 284 - 153 = 131 */}
          <AuthorOfTheYearCard />
        </div>

        <div className="mt-[88px] ml-[62px]"> {/* autor → literatura: 62px */}
          <KoreanLiteratureCard />
        </div>
      </div>
    </section>
  );
}
