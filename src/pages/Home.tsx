import Header from "@/components/layout/Header";
import HeroSection from "@/components/hero/HeroSection";
import BookShelfDivider from "@/components/layout/BookShelfDivider";
import BookShowcase from "@/components/book/BookShowcase";
import { PodiumBooks } from "@/components/hero/PodiumBooks";
import { AuthorOfTheYearCard } from "@/components/spotlight/AuthorOfTheYearCard";
import { KoreanLiteratureCard } from "@/components/spotlight/KoreanLiteratureCard";
import type { Book } from "@/types/Book";
import TopSection from "@/components/home/TopSection";

const books: [Book, Book, Book] = [
  { title: "Livro Esquerda", author: "Autor 1", image: "/livros/livro1.jpg" },
  { title: "Livro Centro", author: "Autor 2", image: "/livros/livro2.jpg" },
  { title: "Livro Direita", author: "Autor 3", image: "/livros/livro3.jpg" },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen max-w-[1920px] mx-auto">
      {/* Esquerda: Hero fixado no topo conforme 153px */}
      <div className="absolute top-[153px] left-[16px] w-[300px]">
        <HeroSection />
      </div>

      {/* Direita: Cards agrupados com escala reduzida e alinhamento ajustado */}
      <div className="absolute top-[153px] left-[656px] scale-[.85] origin-top-left flex">
        <div className="mr-[50px]">
          <PodiumBooks books={books} />
        </div>
        <div className="mr-[62px]">
          <AuthorOfTheYearCard />
        </div>
        <div className="mr-[0px]">
          <KoreanLiteratureCard />
        </div>
      </div>
    </main>
  );
}