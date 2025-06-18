import { useRouter } from "next/router";
import { Star } from "lucide-react";

const livrosMock = [
  {
    id: 0,
    titulo: "O Enigma da Página Perdida",
    autor: "Ana Costa",
    descricao:
      "Um thriller literário repleto de segredos escondidos em bibliotecas esquecidas. Acompanhe a jornada de uma jovem pesquisadora em busca de um manuscrito perdido que pode mudar tudo que conhecemos sobre a história.",
    imagem: "/livros/novos1.jpg",
    nota: 4.7,
    reviews: [
      {
        usuario: "João",
        comentario: "Muito envolvente, li em dois dias!",
        nota: 5,
      },
      {
        usuario: "Carla",
        comentario: "Gostei, mas o final foi previsível.",
        nota: 4,
      },
    ],
  },
  {
    id: 1,
    titulo: "As Estações do Inverno",
    autor: "Lucas Ribeiro",
    descricao:
      "Uma obra poética sobre amor, perda e recomeços, ambientada nas montanhas geladas do sul do Brasil.",
    imagem: "/livros/novos2.jpg",
    nota: 4.3,
    reviews: [],
  },
];

export default function LivroDetalhe() {
  const router = useRouter();
  const { id } = router.query;

  const livro = livrosMock.find((l) => l.id === Number(id));

  if (!livro) return <p className="p-6 text-gray-500">Livro não encontrado.</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-0 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          src={livro.imagem}
          alt={livro.titulo}
          className="w-[200px] h-[300px] object-cover rounded-[20px] shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{livro.titulo}</h1>
          <p className="text-lg text-gray-600 mt-2">Por {livro.autor}</p>
          <div className="flex items-center gap-2 mt-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm text-gray-700 font-medium">
              {livro.nota.toFixed(1)} / 5
            </span>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">{livro.descricao}</p>

          <button className="mt-6 bg-[#DAAA63] hover:bg-[#DAAA63]/90 transition-all px-6 py-2 rounded-full text-white font-semibold shadow-sm border border-black/10">
            Favoritar
          </button>
        </div>
      </div>

      {/* Avaliações */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Avaliações</h2>

        {livro.reviews.length === 0 && (
          <p className="text-gray-500">Este livro ainda não possui avaliações.</p>
        )}

        <div className="flex flex-col gap-4">
          {livro.reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl px-6 py-4 bg-white shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-800">
                  {review.usuario}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.nota
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm">{review.comentario}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}