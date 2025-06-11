import { Header } from "@/components/layout/Header";
import { BookPodium } from "@/components/book/BookPodium";
import { AuthorCard } from "@/components/spotlight/AuthorCard";
import { BookCard } from "@/components/book/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  const darkRomanceBooks = [
    {
      title: "Broken Dreams",
      author: "Sarah Chen",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop&crop=center",
    },
    {
      title: "Midnight Desires",
      author: "Elena Rodriguez",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop&crop=center",
    },
    {
      title: "Dark Hearts",
      author: "James Wilson",
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=450&fit=crop&crop=center",
    },
  ] as const;

  const koreanLiteratureBooks = [
    { title: "서울의 봄", author: "김미영", image: "" },
    { title: "한강의 기억", author: "이정호", image: "" },
    { title: "달빛 이야기", author: "박서연", image: "" },
  ] as const;

  const topRatedBooks = [
    { title: "1984", author: "George Orwell", image: "", rating: 5 },
    { title: "Harry Potter", author: "J.K. Rowling", image: "", rating: 4 },
    { title: "Lord of the Rings", author: "J.R.R. Tolkien", image: "", rating: 5 },
  ];

  return (
    <div className="h-screen bg-bookstore-cream flex flex-col overflow-hidden">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-4 flex flex-col justify-between">
        {/* Hero Section */}
        <section className="text-center mb-6">
          <h1 className="font-cursive text-5xl font-bold text-bookstore-text-dark mb-1">
            Novos & Tendências
          </h1>
          <p className="text-lg text-bookstore-text-gray font-elegant mb-6">
            Explore novos mundos de autores
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Input
              placeholder="Livros, autores e editora"
              className="pl-4 pr-12 py-3 rounded-full border-gray-300 text-base"
            />
            <Button
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#DAAA63] hover:bg-[#cbb77a] rounded-full"
            >
              <Search className="h-5 w-5 text-white" />
            </Button>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="grid lg:grid-cols-3 gap-10 mb-8 flex-shrink-0">
          {/* Dark Romance Podium */}
          <div className="lg:col-span-1">
            <BookPodium title="Dark Romance" books={darkRomanceBooks} />
          </div>

          {/* Author of the Year */}
          <div className="lg:col-span-1 flex justify-center">
            <AuthorCard
              name="Noah Sebastian"
              collection="Noah Sebastian Collection"
              bookCount={79}
              image=""
              className="w-full max-w-xs"
            />
          </div>

          {/* Korean Literature */}
          <div className="lg:col-span-1">
            <h2 className="font-cursive text-2xl font-bold text-bookstore-text-dark mb-1 text-center">
              Literatura Coreana
            </h2>
            <p className="text-bookstore-text-gray text-center mb-5 italic">
              Descoberta
            </p>

            <div className="flex justify-center gap-4">
              {koreanLiteratureBooks.map((book, index) => (
                <BookCard
                  key={index}
                  title={book.title}
                  author={book.author}
                  image={book.image}
                  className="transform scale-90"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Shelf Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-bookstore-text-gray to-transparent mb-8"></div>
        <div className="w-full h-2 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 rounded-full mb-8 shadow-inner"></div>

        {/* Top Rated Books */}
        <section className="flex-shrink-0">
          <h2 className="font-cursive text-3xl font-bold text-bookstore-text-dark text-center mb-8">
            Mais Avaliados
          </h2>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {topRatedBooks.map((book, index) => (
              <BookCard
                key={index}
                title={book.title}
                author={book.author}
                image={book.image}
                rating={book.rating}
                showBuyButton={true}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;