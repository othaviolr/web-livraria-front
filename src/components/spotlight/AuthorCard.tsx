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
      className={`bg-bookstore-orange rounded-2xl p-5 text-white min-h-[280px] flex flex-col justify-between relative ${className}`}
    >
      <div>
        <div className="transform -rotate-90 origin-left absolute left-4 top-1/2 -translate-y-1/2">
          <h2 className="font-cursive text-xl font-bold whitespace-nowrap">
            Autor do ano
          </h2>
        </div>

        <div className="ml-10 text-left">
          <p className="text-lg font-medium mb-1">{collection}</p>
          <p className="text-sm opacity-90">{bookCount} livros</p>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
        />
      </div>
    </div>
  );
};