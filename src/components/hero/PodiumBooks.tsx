import Image from "next/image";

interface Book {
  title: string;
  author: string;
  image: string;
}

interface PodiumBooksProps {
  books: [Book, Book, Book];
}

export const PodiumBooks = ({ books }: PodiumBooksProps) => {
  const [leftBook, centerBook, rightBook] = books;

  return (
    <div className="relative flex items-end justify-center h-[360px] w-[550px]">
      {/* Livro esquerdo */}
      <img
        src={leftBook.image}
        alt={leftBook.title}
        width={195.88}
        height={281.43}
        className="absolute left-0 bottom-0 rotate-[-25deg] rounded-[20px] shadow-md"
      />

      {/* Livro central */}
      <img
        src={centerBook.image}
        alt={centerBook.title}
        width={231}
        height={327}
        className="z-10 rounded-[20px] shadow-lg"
      />

      {/* Livro direito */}
      <img
        src={rightBook.image}
        alt={rightBook.title}
        width={195.88}
        height={281.43}
        className="absolute right-0 bottom-0 rotate-[25deg] rounded-[20px] shadow-md"
      />

      {/* Título do gênero */}
      <div className="absolute -bottom-10 text-center w-full">
        <h3 className="text-xl font-cursive text-orange-500">Dark Romance</h3>
      </div>
    </div>
  );
};
