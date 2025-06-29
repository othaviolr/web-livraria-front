import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Livros from "@/pages/Livros";
import Ranking from "@/pages/Ranking";
import RankingCompleto from "@/pages/RankingCompleto";
import LivroDetalhe from "@/pages/LivroDetalhe";
import AutorDetalhe from "@/pages/AutorDetalhe";
import EditoraDetalhe from "@/pages/EditoraDetalhe"; 
import CompletarPerfil from "@/pages/CompletarPerfil";
import Header from "@/components/layout/Header";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/ranking/completo" element={<RankingCompleto />} />
          <Route path="/livros/:id" element={<LivroDetalhe />} />
          <Route path="/autores/:id" element={<AutorDetalhe />} />
          <Route path="/editoras/:id" element={<EditoraDetalhe />} />
          <Route path="/completar-perfil" element={<CompletarPerfil />} />
        </Routes>
      </div>
    </>
  );
}