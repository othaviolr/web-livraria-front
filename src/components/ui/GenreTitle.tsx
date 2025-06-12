interface GenreTitleProps {
  genreName: string;
  className?: string;  // <- adiciona isso
}

const GenreTitle = ({ genreName, className = "" }: GenreTitleProps) => {
  return (
    <h2 className={`font-cursive text-bookstore-orange text-2xl ${className}`}>
      {genreName}
    </h2>
  );
};

export default GenreTitle;
