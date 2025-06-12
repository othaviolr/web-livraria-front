import { PodiumBooks } from "@/components/hero/PodiumBooks";
import { AuthorOfTheYearCard } from "@/components/spotlight/AuthorOfTheYearCard";
import { KoreanLiteratureCard } from "@/components/spotlight/KoreanLiteratureCard";
import GenreTitle from "@/components/ui/GenreTitle";

interface Book {
  title: string;
  author: string;
  image: string;
}

interface TopSectionProps {
  books: [Book, Book, Book];
}

export default function TopSection({ books }: TopSectionProps) {
  return (
    <div className="flex gap-10 items-start mt-8">
      {/* Card Pódio */}
      <div className="flex flex-col items-center">
        <PodiumBooks books={books} />
        <GenreTitle className="mt-4 text-center" genreName="Dark Romance" />
      </div>

      {/* Card Autor do Ano */}
      <div className="w-[220px]">
        <AuthorOfTheYearCard />
      </div>

      {/* Card Literatura Coreana */}
      <div className="flex-1">
        <KoreanLiteratureCard />
      </div>
    </div>
  );
}
