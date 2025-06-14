import Header from "@/components/layout/Header";
import HeroSection from "@/components/hero/HeroSection";
import { PodiumBooks } from "@/components/hero/PodiumBooks";
import { AuthorOfTheYearCard } from "@/components/spotlight/AuthorOfTheYearCard";
import { KoreanLiteratureCard } from "@/components/spotlight/KoreanLiteratureCard";
import type { Book } from "@/types/Book";

const books: [Book, Book, Book] = [
  { title: "Livro Esquerda", author: "Autor 1", image: "/livros/livro1.jpg" },
  { title: "Livro Centro", author: "Autor 2", image: "/livros/livro2.jpg" },
  { title: "Livro Direita", author: "Autor 3", image: "/livros/livro3.jpg" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen max-w-[1920px] mx-auto px-12 pt-[80px]">
      {/* Header */}
      <Header />

      {/* HeroSection à esquerda */}
      <div className="absolute top-[180px] left-[100px] w-[300px] z-10">
        <HeroSection />
      </div>

      {/* Cards à direita */}
      <div className="absolute top-[190px] left-[740px] scale-[.80] origin-top-left flex gap-[120px] z-0">
        <div className="mr-[50px]">
          <PodiumBooks books={books} />
        </div>
        <AuthorOfTheYearCard />
        <KoreanLiteratureCard />
      </div>

      {/* Espaço reservado abaixo para botões ou próximas seções */}
      <div className="pt-[700px]"></div>
    </main>
  );
}