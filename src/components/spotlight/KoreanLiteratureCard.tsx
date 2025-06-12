export const KoreanLiteratureCard = () => {
  return (
    <div className="w-[220px] h-[360px] bg-white rounded-2xl shadow-md flex flex-col items-center justify-center px-4 text-center">
      <h3 className="text-lg font-cursive text-orange-500 mb-2">Literatura Coreana</h3>
      <div className="flex gap-2">
        <img
          src="/livros/k1.jpg"
          alt="Livro K1"
          width={60}
          height={90}
          className="rounded-md"
        />
        <img
          src="/livros/k2.jpg"
          alt="Livro K2"
          width={60}
          height={90}
          className="rounded-md"
        />
        <img
          src="/livros/k3.jpg"
          alt="Livro K3"
          width={60}
          height={90}
          className="rounded-md"
        />
      </div>
      <p className="mt-2 text-sm text-gray-600">Descubra obras incríveis</p>
    </div>
  );
};
