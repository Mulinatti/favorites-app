import { useContext, useState } from "react";
import { MoviesContext } from "../contexts/moviesContext";

export const useMovies = () => {
  const { movies, setMovies, favorites, setFavorites } =
    useContext(MoviesContext);
  const [searchFilter, setSearchFilter] = useState([]);

  const setFavoriteMovie = (movie) => {
    //const { id } = movie;
    if(favorites.includes(movie))
      return setFavorites(favorites.filter(favorite => favorite !== movie));
    setFavorites([...favorites, movie]);
  };

  const filterMovies = (category) => {
    if (searchFilter.includes(category))
      return setSearchFilter(searchFilter.filter((tag) => tag !== category));
    setSearchFilter([...searchFilter, category]);
  };

  return {
    movies,
    setMovies,
    setFavoriteMovie,
    filterMovies,
    searchFilter,
    favorites
  };
};
