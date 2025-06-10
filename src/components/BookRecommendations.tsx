import { BookCard } from "./BookCard";

export const BookRecommendations = () => {
  const books = [
    {
      title: "False Witness: A Novel",
      author: "Karin Slaughter",
      image:
        "https://images.pexels.com/photos/20837032/pexels-photo-20837032.jpeg",
      rating: 4,
    },
    {
      title: "Malibu Rising",
      author: "Taylor Jenkins Reid",
      image:
        "https://images.pexels.com/photos/3990897/pexels-photo-3990897.jpeg",
      rating: 5,
    },
    {
      title: "Black Ice",
      author: "Brad Thor",
      image:
        "https://images.pexels.com/photos/32452328/pexels-photo-32452328.jpeg",
      rating: 4,
    },
    {
      title: "Blind Tiger",
      author: "Sandra Brown",
      image:
        "https://images.pexels.com/photos/4165581/pexels-photo-4165581.jpeg",
      rating: 5,
    },
  ];

  return (
    <section className="bg-stone-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="text-sm text-gray-600 transform rotate-90 fixed left-4 top-1/2 -translate-y-1/2 origin-center">
            Recent Bestsellers
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              image={book.image}
              rating={book.rating}
              className="transform hover:-translate-y-2 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
