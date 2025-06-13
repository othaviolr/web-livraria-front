export const AuthorOfTheYearCard = () => {
  return (
    <div className="relative w-[294px] h-[417px] bg-[#DAAA63] rounded-2xl shadow-md px-4 pt-4 pb-0 overflow-hidden">
      {/* Texto no topo */}
      <div className="text-center">
        <h3 className="text-xl font-cursive text-black leading-tight">
          Noah Sebastian<br />Collection
        </h3>
        <p className="text-sm text-black/70 mt-1">79 livros</p>
      </div>

      {/* Imagem do autor no fundo */}
      <img
        src="/livros/autor.jpg"
        alt="Autor do Ano"
        width={180}
        height={180}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
      />
    </div>
  );
};
