import React from "react";
import Catalog from "../Catalog";
import { useMovies } from "../../hooks/useMovies";

const Favorites = () => {
  const { favorites } = useMovies();

  return (
    <main>
      {favorites.length ? (
        <Catalog title="Your Favorites" movies={favorites} />
      ) : (
        <h2 style={{textAlign: "center"}}>You have no favorites...</h2>
      )}
    </main>
  );
};

export default Favorites;
