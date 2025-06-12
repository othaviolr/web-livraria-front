import Image from "next/image";

export const AuthorOfTheYearCard = () => {
  return (
    <div className="w-[220px] h-[360px] bg-white rounded-2xl shadow-md flex flex-col items-center justify-center px-4 text-center">
      <h3 className="text-lg font-cursive text-orange-500 mb-2">Autor do Ano</h3>
      <img
        src="/autor.jpg"
        alt="Autor do Ano"
        width={120}
        height={120}
        className="rounded-full mb-2"
      />
      <p className="text-base font-semibold text-gray-700">Noah Sebastian Collection</p>
      <p className="text-sm text-gray-500">79 livros</p>
    </div>
  );
};