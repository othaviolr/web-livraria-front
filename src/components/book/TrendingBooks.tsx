import { Star } from "lucide-react";

export default function TrendingBooks() {
  const books = [
    {
      title: "A Promessa de um Amor",
      author: "Isabela Freitas",
      image: "/livros/novos1.jpg",
      rating: 4,
    },
    {
      title: "O Segredo da Montanha",
      author: "Lucas Rocha",
      image: "/livros/novos2.jpg",
      rating: 5,
    },
    {
      title: "Sombras da Memória",
      author: "Clara Alves",
      image: "/livros/novos3.jpg",
      rating: 3,
    },
  ];

  return (
    <div className="flex justify-between items-start px-32 mt-[60px] relative z-20">
      {books.map((book, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Capa + Info ao lado */}
          <div className="flex items-center gap-6">
            <img
              src={book.image}
              alt={book.title}
              className="w-[160px] h-[240px] object-cover rounded-[20px] shadow-md"
            />

            <div className="flex flex-col justify-center">
              {/* Estrelas */}
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

              {/* Título e autor */}
              <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
              <p className="text-md text-gray-500 mt-1">{book.author}</p>

              {/* Botão mais compacto horizontalmente */}
              <button 
                className="mt-4 text-black px-4 py-2 rounded-full hover:bg-[#c29955] transition text-base font-medium w-fit"
                style={{ backgroundColor: '#DAAA63' }}
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