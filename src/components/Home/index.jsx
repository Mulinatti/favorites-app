import React from "react";
import Catalog from "../Catalog";
import { useMovies } from "../../hooks/useMovies";

const Home = () => {
  const { movies } = useMovies();

  return (
    <main>
      <Catalog title="Complete Catalog" movies={movies} />
    </main>
  );
};

export default Home;
