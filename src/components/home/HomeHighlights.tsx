import { AuthorOfTheYearCard } from "@/components/spotlight/AuthorOfTheYearCard";
import { KoreanLiteratureCard } from "@/components/spotlight/KoreanLiteratureCard";
import { PodiumBooks } from "@/components/hero/PodiumBooks";
import { SearchBar } from "@/components/hero/SearchBar";

interface Book {
  title: string;
  author: string;
  image: string;
}

interface HomeHighlightsProps {
  books: [Book, Book, Book];
}

export function HomeHighlights({ books }: HomeHighlightsProps) {
  return (
    <section className="w-full">
      {/* título e barra de pesquisa */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Novos & Tendências</h2>
        <SearchBar />
      </div>

      {/* cards: podium, autor do ano e literatura coreana */}
      <div className="flex gap-6 items-end">
        <PodiumBooks books={books} />
        <AuthorOfTheYearCard />
        <KoreanLiteratureCard />
      </div>
    </section>
  );
}
