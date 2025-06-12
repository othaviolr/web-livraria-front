import { BookCard } from "@/components/book/BookCard";

interface Book {
  title: string;
  author: string;
  image: string;
}

interface BookPodiumProps {
  books: readonly [Book, Book, Book];
  className?: string;
}

export const BookPodium = ({ books, className = "" }: BookPodiumProps) => {
  return (
    <div className={`flex items-end justify-center ${className}`}>
      {/* Left book */}
      <div className="relative z-0 -mr-8" style={{ width: "196px", height: "281.43px" }}>
        <BookCard
          title={books[0].title}
          author={books[0].author}
          image={books[0].image}
          rotate="left"
          className="rounded-[20px]"
          style={{ width: "196px", height: "281.43px" }}
          hideTitleSubtitle
        />
      </div>

      {/* Center book (elevated) */}
      <div
        className="relative z-10"
        style={{ width: "231px", height: "327px", margin: "0 12px" }}
      >
        <BookCard
          title={books[1].title}
          author={books[1].author}
          image={books[1].image}
          rotate="none"
          className="rounded-[20px]"
          style={{ width: "231px", height: "327px" }}
          hideTitleSubtitle
        />
      </div>

      {/* Right book */}
      <div className="relative z-0 -ml-8" style={{ width: "196px", height: "281.43px" }}>
        <BookCard
          title={books[2].title}
          author={books[2].author}
          image={books[2].image}
          rotate="right"
          className="rounded-[20px]"
          style={{ width: "196px", height: "281.43px" }}
          hideTitleSubtitle
        />
      </div>
    </div>
  );
};