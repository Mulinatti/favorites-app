import { useContext } from "react"
import { MoviesContext } from "../contexts/moviesContext"

export const useMovies = () => {
  const {movies, setMovies} = useContext(MoviesContext);

  const setFavorite = (id) => {
    setMovies(
      movies.map((movie) => {
        return movie.id === id
          ? { ...movie, favorite: !movie.favorite }
          : movie;
      })
    );
  }

  return {
    movies,
    setMovies,
    setFavorite
  }
}