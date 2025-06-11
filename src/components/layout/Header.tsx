import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, MoreHorizontal, Bookmark, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-bookstore-text-dark">
            Livraria do Tavin
          </h1>
        </div>

        {/* Center Navigation */}
        <div className="flex items-center gap-4">
          <Link to="/livros">
            <Button className="bg-bookstore-orange hover:bg-bookstore-orange-hover text-white px-6 py-2 rounded-full font-medium">
              📚 Livros
            </Button>
          </Link>
          <Link to="/ranking">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-50"
            >
              📈 Ranking
            </Button>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="text-sm">
            Registrar/Login
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-5 w-5" />
          </Button>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-gray-600" />
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
