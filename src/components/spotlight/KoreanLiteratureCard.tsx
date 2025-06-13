export const KoreanLiteratureCard = () => {
  return (
    <div className="relative w-[268px] h-[372px] bg-[#D5D4D2] rounded-2xl shadow-md px-4 pt-4 pb-2 overflow-hidden">
      {/* Título e descrição */}
      <div className="text-center">
        <h3 className="text-xl font-cursive text-black">Literatura Coreana</h3>
        <p className="text-sm text-gray-600 mt-1">Descubra obras incríveis</p>
      </div>

      {/* Livros no fundo */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end gap-[-10px]">
        <img
          src="/livros/k1.jpg"
          alt="Livro K1"
          width={140}
          height={200}
          className="rounded-md z-30"
        />
        <img
          src="/livros/k2.jpg"
          alt="Livro K2"
          width={120}
          height={180}
          className="rounded-md z-20"
        />
        <img
          src="/livros/k3.jpg"
          alt="Livro K3"
          width={100}
          height={160}
          className="rounded-md z-10"
        />
      </div>
    </div>
  );
};
