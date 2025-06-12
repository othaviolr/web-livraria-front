import { FaStar } from "react-icons/fa";

type Props = {
  title: string;
  author: string;
  image: string;
  rating: number;
};

export default function BookRatingCard({ title, author, image, rating }: Props) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div className="w-[200px] bg-white rounded-2xl shadow p-4 flex flex-col items-center">
      <img src={image} alt={title} className="w-full h-[250px] object-cover rounded-lg mb-4" />
      <h3 className="font-bold text-lg text-center">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">{author}</p>
      <div className="flex mb-2">
        {stars.map((filled, i) => (
          <FaStar key={i} className={filled ? "text-yellow-400" : "text-gray-300"} />
        ))}
      </div>
      <button className="mt-auto bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
        Comprar
      </button>
    </div>
  );
}