import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Livros from "@/pages/Livros";
import Ranking from "@/pages/Ranking";
import LivroDetalhe from "@/pages/LivroDetalhe"; 
import Header from "@/components/layout/Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/livros/:id" element={<LivroDetalhe />} /> 
        </Routes>
      </div>
    </>
  );
}