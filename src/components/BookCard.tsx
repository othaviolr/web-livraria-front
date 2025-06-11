import { Button } from "@/components/ui/button";
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
  showBuyButton = false,
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
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-32 h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
        />
      </div>

      {rating && (
        <div className="flex items-center gap-1 mt-2">
          {renderStars(rating)}
        </div>
      )}

      <h3 className="font-medium text-bookstore-text-dark mt-2 text-center text-sm max-w-32">
        {title}
      </h3>
      <p className="text-bookstore-text-gray text-sm text-center">{author}</p>

      {showBuyButton && (
        <Button className="mt-3 bg-bookstore-orange hover:bg-bookstore-orange-hover text-white px-4 py-1 rounded-full text-sm">
          Comprar
        </Button>
      )}
    </div>
  );
};
