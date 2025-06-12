import { BookPodium } from "@/components/book/BookPodium";
import GenreTitle from "@/components/ui/GenreTitle";

const books = [
  { title: "", author: "", image: "/path/to/left-book.jpg" },
  { title: "", author: "", image: "/path/to/center-book.jpg" },
  { title: "", author: "", image: "/path/to/right-book.jpg" },
];

export const HeroSection = () => {
  return (
    <section className="flex items-end px-10 pt-[225px] max-w-[900px] gap-10">
      {/* Texto "Novos & Tendências" à esquerda */}
      <div className="flex flex-col max-w-xs">
        <h1 className="font-cursive text-5xl font-bold text-bookstore-text-dark leading-tight no-underline mb-2">
          Novos & Tendências
        </h1>
        <p className="text-lg text-bookstore-text-gray italic font-elegant">
          Explore novos mundos de autores
        </p>
      </div>

      {/* Podium e gênero à direita */}
      <div className="flex flex-col items-center">
        <BookPodium
          books={books as [typeof books[0], typeof books[1], typeof books[2]]}
          className="max-w-[551px]"
        />
        <GenreTitle className="mt-4" genreName="Dark Romance" />
      </div>
    </section>
  );
};
