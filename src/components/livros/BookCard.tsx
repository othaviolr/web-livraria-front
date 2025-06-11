import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
  rating?: number;
  showBuyButton?: boolean;
  className?: string;
}

export const BookCard = ({
  title,
  author,
  image,
  rating,
  showBuyButton = true,
  className = "",
}: BookCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card
      className={`p-6 hover:shadow-xl transition-all duration-300 bg-white rounded-2xl border-0 shadow-lg ${className}`}
    >
      <div className="aspect-[3/4] mb-4 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {rating && (
        <div className="flex items-center gap-1 mb-3">
          {renderStars(rating)}
        </div>
      )}

      <h3 className="font-semibold text-gray-900 mb-2 text-lg leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{author}</p>

      {showBuyButton && (
        <Button
          variant="outline"
          className="w-full bg-yellow-400 border-yellow-400 text-black hover:bg-yellow-500 hover:border-yellow-500 rounded-full font-medium py-2"
        >
          Buy Now
        </Button>
      )}
    </Card>
  );
};
