import { BookCard } from "@/components/book/BookCard";

interface Book {
  title: string;
  author: string;
  image: string;
}

interface BookPodiumProps {
  title: string;
  books: readonly [Book, Book, Book]; // aceitando readonly tuple
  className?: string;
}

export const BookPodium = ({
  title,
  books,
  className = "",
}: BookPodiumProps) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-cursive text-3xl font-bold text-bookstore-text-dark mb-6">
        {title}
      </h2>

      <div className="flex items-end justify-center gap-4">
        {/* Left book */}
        <div className="transform translate-y-4">
          <BookCard
            title={books[0].title}
            author={books[0].author}
            image={books[0].image}
          />
        </div>

        {/* Center book (elevated) */}
        <div className="transform -translate-y-4 z-10">
          <BookCard
            title={books[1].title}
            author={books[1].author}
            image={books[1].image}
            className="scale-110"
          />
        </div>

        {/* Right book */}
        <div className="transform translate-y-4">
          <BookCard
            title={books[2].title}
            author={books[2].author}
            image={books[2].image}
          />
        </div>
      </div>
    </div>
  );
};