import { Header } from "@/components/Header";
import { BookPodium } from "@/components/BookPodium";
import { AuthorCard } from "@/components/AuthorCard";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  // Sample data - in a real app this would come from an API
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
    {
      title: "서울의 봄",
      author: "김미영",
      image:
        "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=450&fit=crop&crop=center",
    },
    {
      title: "한강의 기억",
      author: "이정호",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&crop=center",
    },
    {
      title: "달빛 이야기",
      author: "박서연",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=450&fit=crop&crop=center",
    },
  ] as const;

  const topRatedBooks = [
    {
      title: "1984",
      author: "George Orwell",
      image:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=450&fit=crop&crop=center",
      rating: 5,
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      image:
        "https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?w=300&h=450&fit=crop&crop=center",
      rating: 4,
    },
    {
      title: "Lord of the Rings",
      author: "J.R.R. Tolkien",
      image:
        "https://images.unsplash.com/photo-1618556448411-6ad7e12c4e64?w=300&h=450&fit=crop&crop=center",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-bookstore-cream">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="font-cursive text-6xl font-bold text-bookstore-text-dark mb-4">
            Novos & Tendências
          </h1>
          <p className="text-xl text-bookstore-text-gray mb-8 font-elegant">
            Explore novos mundos de autores
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Input
              placeholder="Livros, autores e editora"
              className="pl-4 pr-12 py-3 rounded-full border-gray-300 text-lg"
            />
            <Button
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-bookstore-orange hover:bg-bookstore-orange-hover rounded-full"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="grid lg:grid-cols-3 gap-12 mb-16">
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
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              className="w-full max-w-xs"
            />
          </div>

          {/* Korean Literature */}
          <div className="lg:col-span-1">
            <h2 className="font-cursive text-3xl font-bold text-bookstore-text-dark mb-2 text-center">
              Literatura Coreana
            </h2>
            <p className="text-bookstore-text-gray text-center mb-6 italic">
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
        <div className="w-full h-px bg-gradient-to-r from-transparent via-bookstore-text-gray to-transparent mb-16"></div>
        <div className="w-full h-2 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 rounded-full mb-16 shadow-inner"></div>

        {/* Top Rated Books */}
        <section>
          <h2 className="font-cursive text-4xl font-bold text-bookstore-text-dark text-center mb-12">
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
