import React from "react";
import Catalog from "../Catalog";
import { useMovies } from "../../hooks/useMovies";

const Favorites = () => {
  const { movies } = useMovies();

  const favorites = movies.filter((movie) => movie.favorite === true);

  return (
    <main>
      {favorites.length ? (
        <Catalog title="Your Favorites" movies={favorites} />
      ) : (
        <h2 style={{textAlign: "center"}}>You have no favorites yet...</h2>
      )}
    </main>
  );
};

export default Favorites;
