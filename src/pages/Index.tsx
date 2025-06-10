import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BookRecommendations } from "@/components/BookRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      <Header />
      <HeroSection />
      <BookRecommendations />
    </div>
  );
};

export default Index;
