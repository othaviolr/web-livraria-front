export const KoreanLiteratureCard = () => {
  return (
    <div className="relative w-[268px] h-[372px] bg-[#D5D4D2] rounded-[30px] shadow-md px-4 pt-4 pb-0 overflow-hidden mt-[45px]">
      {/* Título e descrição */}
      <div className="text-center">
        <h3 className="text-[20px] font-montserrat text-black leading-tight">
          Literatura Coreana
        </h3>
        <p className="text-[20px] font-montserrat text-gray-600/80 mt-2">
          Descubra obras incríveis
        </p>
      </div>

      {/* Container dos livros - ajuste fino no posicionamento */}
      <div className="absolute bottom-[-30px] left-0 right-0 flex justify-center">
        <div className="flex relative h-[200px] items-end">
          {/* Livro 1 */}
          <div className="relative z-30" style={{ marginRight: '-20px' }}>
            <img
              src="/livros/k3.jpg"
              alt="Livro K1"
              className="w-[140px] h-[200px] rounded-md shadow-md object-cover"
            />
          </div>
          
          {/* Livro 2 */}
          <div className="relative z-20" style={{ marginRight: '-20px' }}>
            <img
              src="/livros/k1.jpg"
              alt="Livro K2"
              className="w-[120px] h-[180px] rounded-md shadow-md object-cover"
            />
          </div>
          
          {/* Livro 3 */}
          <div className="relative z-10">
            <img
              src="/livros/k2.jpg"
              alt="Livro K3"
              className="w-[100px] h-[160px] rounded-md shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};