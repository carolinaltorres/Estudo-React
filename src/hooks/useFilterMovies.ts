import { useEffect, useState } from "react";
import type { Movie } from "../types";

const useFilterMovies = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [isCarregando, setIsCarregando] = useState<boolean>(false);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearch = () => {
    setIsCarregando(true);
    const filtered = movies.filter((movie) =>
      movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTimeout(() => {
      setFilteredMovies(filtered);
      setIsCarregando(false);
    }, 5000);
  };

  return { searchTerm, setSearchTerm, filteredMovies, handleSearch, isCarregando};
};

export default useFilterMovies;
