import { useContext, useState } from "react";
import { MoviesContext } from "../contexts/moviesContext";

export const useMovies = () => {
  const { movies, setMovies } = useContext(MoviesContext);
  const [searchFilter, setSearchFilter] = useState([]);

  const setFavorites = (movie) => {
    const { id } = movie;

    setMovies(
      movies.map((movie) => {
        return movie.id === id
          ? { ...movie, favorite: !movie.favorite }
          : movie;
      })
    );
  };

  const filterMovies = (category) => {
    if (searchFilter.includes(category))
      return setSearchFilter(searchFilter.filter((tag) => tag !== category));
    setSearchFilter([...searchFilter, category]);
  };

  return {
    movies,
    setMovies,
    setFavorites,
    filterMovies,
    searchFilter,
  };
};
