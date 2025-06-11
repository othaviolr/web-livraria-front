interface AuthorCardProps {
  name: string;
  collection: string;
  bookCount: number;
  image: string;
  className?: string;
}

export const AuthorCard = ({
  name,
  collection,
  bookCount,
  image,
  className = "",
}: AuthorCardProps) => {
  return (
    <div
      className={`bg-bookstore-orange rounded-2xl p-6 text-white min-h-[300px] flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="transform -rotate-90 origin-left absolute left-6 top-1/2 translate-y-1/2">
          <h2 className="font-cursive text-2xl font-bold whitespace-nowrap">
            Autor do ano
          </h2>
        </div>

        <div className="ml-8 text-center">
          <p className="text-lg font-medium mb-2">{collection}</p>
          <p className="text-sm opacity-90">{bookCount} livros</p>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
        />
      </div>
    </div>
  );
};
