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
    <main className="flex min-h-screen max-w-[1920px] mx-auto">
      {/* Lado esquerdo: título e busca */}
      <div className="ml-[153px] mt-[284px] w-[300px]">
        <HeroSection />
      </div>

      {/* Lado direito: cards */}
      <section className="flex-1">
        <TopSection books={books} />
      </section>
    </main>
  );
}
