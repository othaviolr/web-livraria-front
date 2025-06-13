export const AuthorOfTheYearCard = () => {
  return (
    <div className="relative w-[294px] h-[417px] bg-[#DAAA63] rounded-2xl shadow-md flex flex-col items-center justify-between px-4 pt-4 pb-0">
      {/* Texto no topo, centralizado */}
      <div className="text-center">
        <h3 className="text-xl font-cursive text-black leading-tight">
          Noah Sebastian<br />Collection
        </h3>
        <p className="text-sm text-black/70 mt-1">79 livros</p>
      </div>

      {/* Imagem encostando no "chão" */}
      <img
        src="/autor.png"
        alt="Autor do Ano"
        width={180}
        height={180}
        className="z-10"
      />
    </div>
  );
};
