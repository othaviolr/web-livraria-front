export const KoreanLiteratureCard = () => {
  return (
    <div className="relative w-[268px] h-[372px] bg-[#D5D4D2] rounded-2xl shadow-md px-4 pt-4 pb-2 flex flex-col justify-between overflow-hidden">
      {/* Título e descrição no topo */}
      <div className="text-center">
        <h3 className="text-xl font-cursive text-black">Literatura Coreana</h3>
        <p className="text-sm text-gray-600 mt-1">Descubra obras incríveis</p>
      </div>

      {/* Livros sobrepostos e encostando no chão */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end gap-[-12px]">
        <img
          src="/livros/k1.jpg"
          alt="Livro K1"
          width={155}
          height={224}
          className="rounded-md z-30"
        />
        <img
          src="/livros/k2.jpg"
          alt="Livro K2"
          width={134}
          height={201}
          className="rounded-md z-20"
        />
        <img
          src="/livros/k3.jpg"
          alt="Livro K3"
          width={116}
          height={180}
          className="rounded-md z-10"
        />
      </div>
    </div>
  );
};