import HeroSection from "@/components/hero/HeroSection";
import TopSection from "@/components/home/TopSection";
import type { Book } from "@/types/Book";

const books: [Book, Book, Book] = [
  { title: "Livro Esquerda", author: "Autor 1", image: "/livros/livro1.png" },
  { title: "Livro Centro", author: "Autor 2", image: "/livros/livro2.png" },
  { title: "Livro Direita", author: "Autor 3", image: "/livros/livro3.png" },
];

export default function Home() {
  return (
    <main className="flex items-start justify-center min-h-screen max-w-[1920px] mx-auto px-12 pt-32 gap-20">
      {/* Lado esquerdo: Título e barra de pesquisa */}
      <div className="flex flex-col w-[300px] mt-8">
        <HeroSection />
      </div>

      {/* Lado direito: Cards de pódio, autor e literatura */}
      <section className="flex-1">
        <TopSection books={books} />
      </section>
    </main>
  );
}
