import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
  rating?: number;
  showBuyButton?: boolean;
  className?: string;
  rotate?: "left" | "right" | "none";
  style?: React.CSSProperties;
  hideTitleSubtitle?: boolean;
}

export const BookCard = ({
  title,
  author,
  image,
  rating,
  showBuyButton = false,
  className = "",
  rotate = "none",
  style,
  hideTitleSubtitle = false,
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

  let rotationClass = "";
  if (rotate === "left") rotationClass = "rotate-[-25deg]";
  else if (rotate === "right") rotationClass = "rotate-[25deg]";

  return (
    <div
      className={`bg-transparent flex flex-col items-center p-0 transition-shadow duration-300 ${rotationClass} ${className}`}
      style={style}
    >
      <div className="relative w-full h-full overflow-hidden rounded-[20px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {!hideTitleSubtitle && (
        <>
          {rating && (
            <div className="flex items-center gap-1 mb-2">{renderStars(rating)}</div>
          )}

          <h3 className="font-cursive text-lg text-bookstore-text-dark text-center leading-snug mb-1">
            {title}
          </h3>
          <p className="text-bookstore-text-gray text-sm italic text-center mb-4">
            {author}
          </p>
        </>
      )}

      {showBuyButton && (
        <Button className="bg-bookstore-orange hover:bg-bookstore-orange-hover text-white px-5 py-2 rounded-full text-sm shadow-md transition-colors duration-300 w-full">
          Comprar
        </Button>
      )}
    </div>
  );
};