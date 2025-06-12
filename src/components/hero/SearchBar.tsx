import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xs">
      <Input
        placeholder="Livros, autores e editora"
        className="pl-4 pr-12 py-3 rounded-full border-gray-300 text-base"
      />
      <Button
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#DAAA63] hover:bg-[#cbb77a] rounded-full"
      >
        <Search className="h-5 w-5 text-white" />
      </Button>
    </div>
  );
};