import HeroSection from "@/components/hero/HeroSection";
import { PodiumBooks } from "@/components/hero/PodiumBooks";
import { AuthorOfTheYearCard } from "@/components/spotlight/AuthorOfTheYearCard";
import { KoreanLiteratureCard } from "@/components/spotlight/KoreanLiteratureCard";
import BookShelf from "@/components/layout/BookShelfDivider";
import TrendingBooks from "@/components/book/TrendingBooks";
import type { Book } from "@/types/Book";

const books: [Book, Book, Book] = [
  { title: "Livro Esquerda", author: "Autor 1", image: "/livros/livro1.jpg" },
  { title: "Livro Centro", author: "Autor 2", image: "/livros/livro2.jpg" },
  { title: "Livro Direita", author: "Autor 3", image: "/livros/livro3.jpg" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen max-w-[1920px] mx-auto px-12 pt-[80px]">
      {/* Header foi removido daqui, pois já está no App.tsx */}

      {/* Título + barra de pesquisa */}
      <div className="absolute top-[180px] left-[100px] w-[300px] z-10">
        <HeroSection />
      </div>

      {/* Cards: Pódio, Autor do Ano, Literatura Coreana */}
      <div className="absolute top-[150px] left-[740px] scale-[.80] origin-top-left flex gap-[120px] z-0">
        <div className="mr-[50px]">
          <PodiumBooks books={books} />
        </div>
        <AuthorOfTheYearCard />
        <KoreanLiteratureCard />
      </div>

      <div className="pt-[500px] relative z-0">
        <BookShelf />
        <TrendingBooks />
      </div>
    </main>
  );
}