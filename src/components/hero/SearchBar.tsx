import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xs">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />

      <input
        type="text"
        placeholder="Livros, autores e editora"
        className="w-full pl-12 pr-4 py-3 rounded-full border border-black/15 bg-white/60 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAAA63] transition"
      />
    </div>
  );
};