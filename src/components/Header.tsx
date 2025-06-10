import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Headphones,
  Bookmark,
  ShoppingCart,
  Moon,
  MoreHorizontal,
} from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">BOOKS</h1>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Navigation Tabs */}
          <div className="flex items-center gap-2">
            <Button
              variant="default"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-medium"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Books
            </Button>

            <Button
              variant="ghost"
              className="text-gray-700 hover:bg-gray-100 px-6 py-2 rounded-full font-medium"
            >
              <Headphones className="h-4 w-4 mr-2" />
              AudioBooks
            </Button>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
            >
              <Bookmark className="h-5 w-5" />
            </Button>

            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-gray-900"
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center p-0">
                3
              </Badge>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900 bg-black rounded-full"
            >
              <Moon className="h-5 w-5 text-white" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
