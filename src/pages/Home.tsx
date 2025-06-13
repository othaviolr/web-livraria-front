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
    <main className="relative min-h-screen max-w-[1920px] mx-auto px-12">
      {/* HeroSection à esquerda */}
      <div className="absolute top-[180px] left-[100px] w-[300px] z-10">
        <HeroSection />
      </div>

      {/* Cards à direita, mais para baixo e direita com escala reduzida */}
        <div className="absolute top-[230px] left-[740px] scale-[.85] origin-top-left flex gap-[62px] z-0">
        <div className="mr-[50px]">
          <PodiumBooks books={books} />
        </div>
        <AuthorOfTheYearCard />
        <KoreanLiteratureCard />
      </div>

      {/* Espaço reservado abaixo para garantir que elementos abaixo apareçam */}
      <div className="pt-[700px]">{/* Aqui entram os botões e ícones */}</div>
    </main>
  );
}