import BookRatingCard from "./BookRatingCard";

const books = [
  {
    title: "Verity",
    author: "Colleen Hoover",
    image: "/mock/verity.jpg",
    rating: 5,
  },
  {
    title: "O Ceifador",
    author: "Neal Shusterman",
    image: "/mock/ceifador.jpg",
    rating: 4,
  },
  {
    title: "O Conto da Aia",
    author: "Margaret Atwood",
    image: "/mock/contodaia.jpg",
    rating: 4,
  },
];

export default function BookShowcase() {
  return (
    <section className="px-12 pb-16">
      <h2 className="text-2xl font-bold mb-6">Destaques Avaliados</h2>
      <div className="flex justify-center gap-10">
        {books.map((book, index) => (
          <BookRatingCard key={index} {...book} />
        ))}
      </div>
    </section>
  );
}
