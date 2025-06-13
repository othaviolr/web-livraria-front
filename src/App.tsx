import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Livros from "@/pages/Livros";
import Ranking from "@/pages/Ranking";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/livros" element={<Livros />} />
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  );
}
