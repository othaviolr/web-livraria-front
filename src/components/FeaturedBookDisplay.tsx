import { Badge } from "@/components/ui/badge";

export const FeaturedBookDisplay = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative">
        <div className="relative w-80 h-96 transform rotate-12 shadow-2xl">
          <img
            src="https://images.pexels.com/photos/20837032/pexels-photo-20837032.jpeg"
            alt="The Last Thing He Told Me"
            className="w-full h-full object-cover rounded-lg"
          />
          <Badge className="absolute -top-3 -left-3 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-xs">
            #1 NEW YORK TIMES BESTSELLER
          </Badge>
        </div>
        <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
          OPRAH'S
          <br />
          BOOK CLUB
        </div>
      </div>
    </div>
  );
};
