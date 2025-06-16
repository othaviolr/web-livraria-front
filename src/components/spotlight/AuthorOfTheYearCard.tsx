export const AuthorOfTheYearCard = () => {
  return (
    <div className="relative flex items-center">
  <div className="absolute -left-[100px] top-[75%] -translate-y-1/2 rotate-[-90deg]">
    <h2 className="text-[28px] font-luxurious text-black whitespace-nowrap leading-none">
      Autor do Ano
    </h2>
  </div>

      {/* Card do autor */}
      <div className="relative w-[294px] h-[417px] bg-[#DAAA63] rounded-[30px] shadow-md px-4 pt-4 pb-0 overflow-hidden">
        <div className="text-center mt-16">
          <h3 className="text-[20px] font-montserrat text-black leading-tight">
            Noah Sebastian<br />Collection
          </h3>
          <p className="text-[20px] font-montserrat text-black/50 mt-2">
            79 livros
          </p>
        </div>

        <img
          src="/livros/autor.jpg"
          alt="Autor do Ano"
          className="absolute bottom-[80px] left-1/2 -translate-x-[40%] z-10 scale-[3] w-[200px] h-auto"
        />
      </div>
    </div>
  );
};
