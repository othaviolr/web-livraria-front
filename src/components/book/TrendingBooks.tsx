import { Star } from "lucide-react";

export default function TrendingBooks() {
  const books = [
    {
      title: "Saboroso Cadáver",
      author: "Agustina Bazterrica",
      image: "/livros/novos1.jpg",
      rating: 4,
    },
    {
      title: "Se você pudesse ver o sol",
      author: "Ann Liang",
      image: "/livros/novos2.jpg",
      rating: 4,
    },
    {
      title: "O Colecionador",
      author: "John Fowles",
      image: "/livros/novos3.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="flex justify-between items-start px-32 mt-[60px] relative z-20">
      {books.map((book, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <img
              src={book.image}
              alt={book.title}
              className="w-[160px] h-[240px] object-cover rounded-[20px] shadow-md hover:shadow-lg transition-shadow"
            />

            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < book.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
              <p className="text-md text-gray-500 mt-1">{book.author}</p>

              {/* Botão sutil e compacto */}
              <button 
                className="mt-4 px-4 py-1.5 rounded-full 
                          bg-white text-[#DAAA63] border border-[#DAAA63] 
                          hover:bg-[#DAAA63] hover:text-white
                          transition-colors duration-200
                          text-sm font-medium w-fit
                          shadow-sm hover:shadow-md"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}