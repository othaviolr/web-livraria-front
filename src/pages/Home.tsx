import Header from "../components/layout/Header";
import HeroSection from "../components/hero/HeroSection";
import { PodiumBooks } from "@/components/hero/PodiumBooks";
import BookShelfDivider from "../components/layout/BookShelfDivider";
import BookShowcase from "../components/book/BookShowcase";

const books: [ 
  { title: string; author: string; image: string },
  { title: string; author: string; image: string },
  { title: string; author: string; image: string }
] = [
  { title: "Livro Esquerda", author: "Autor 1", image: "/livros/livro1.jpg" },
  { title: "Livro Centro", author: "Autor 2", image: "/livros/livro2.jpg" },
  { title: "Livro Direita", author: "Autor 3", image: "/livros/livro3.jpg" },
];

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PodiumBooks books={books} />
      <BookShelfDivider />
      <BookShowcase />
    </>
  );
}
