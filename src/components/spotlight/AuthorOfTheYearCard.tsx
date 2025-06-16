export const AuthorOfTheYearCard = () => {
  return (
    <div className="relative w-[294px] h-[417px] bg-[#DAAA63] rounded-2xl shadow-md px-4 pt-4 pb-0 overflow-hidden">
      <div className="text-center">
        <h3 className="text-[20px] font-montserrat text-black leading-tight">
          Noah Sebastian<br />Collection
        </h3>
        <p className="text-[20px] font-montserrat text-black/50 mt-2">79 livros</p>
      </div>

      <img
        src="/livros/autor.jpg"
        alt="Autor do Ano"
        className="absolute bottom-[80px] left-1/2 -translate-x-[40%] z-10 scale-[3] w-[200px] h-auto"
      />
    </div>
  );
};