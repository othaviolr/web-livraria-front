import type { Book } from "@/types/Book";
import { PodiumBooks } from "@/components/hero/PodiumBooks";
import { AuthorOfTheYearCard } from "@/components/spotlight/AuthorOfTheYearCard";
import { KoreanLiteratureCard } from "@/components/spotlight/KoreanLiteratureCard";
import GenreTitle from "@/components/ui/GenreTitle";

interface TopSectionProps {
  books: [Book, Book, Book];
}

export default function TopSection({ books }: TopSectionProps) {
  return (
    <div className="flex items-start mt-[284px] ml-[16px] gap-[50px]">
      {/* Card Pódio */}
      <div className="flex flex-col items-center">
        <PodiumBooks books={books} />
      </div>

      {/* Card Autor do Ano */}
      <div className="w-[294px] mt-[0px]"> {/* Mantém altura com pódio */}
        <AuthorOfTheYearCard />
      </div>

      {/* Card Literatura Coreana */}
      <div className="w-[268px] mt-[0px] ml-[62px] mr-[50px]">
        <KoreanLiteratureCard />
      </div>
    </div>
  );
}