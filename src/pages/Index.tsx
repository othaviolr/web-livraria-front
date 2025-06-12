import { HeroSection } from "@/components/hero/HeroSection";
import { BookPodium } from "@/components/book/BookPodium";
import GenreTitle from "@/components/ui/GenreTitle";

interface Book {
  title: string;
  author: string;
  image: string;
}

// books já tipados como tupla de 3 elementos, para bater com o que o BookPodium espera
const books: [Book, Book, Book] = [
  { title: "Livro Esquerda", author: "Autor 1", image: "/images/left-book.jpg" },
  { title: "Livro Centro", author: "Autor 2", image: "/images/center-book.jpg" },
  { title: "Livro Direita", author: "Autor 3", image: "/images/right-book.jpg" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bookstore-bg flex justify-start px-10 pt-[225px] max-w-[1920px] mx-auto">
      {/* Lado esquerdo: Hero (título + barra de busca) */}
      <div className="flex flex-col max-w-xs mr-20">
        <HeroSection />
      </div>

      {/* Lado direito: Novos & Tendências + Podium */}
      <section className="flex flex-col items-center max-w-[551px]">
        <div className="self-start mb-4">
          <h1 className="font-cursive text-5xl font-bold text-bookstore-text-dark leading-tight">
            Novos & Tendências
          </h1>
          <p className="text-lg text-bookstore-text-gray italic font-elegant mt-1">
            Explore novos mundos de autores
          </p>
        </div>

        <BookPodium books={books} className="" />

        <GenreTitle className="mt-6 text-center" genreName="Dark Romance" />
      </section>
    </main>
  );
}
