import React from "react";
import Catalog from "../Catalog";
import { useMovies } from "../../hooks/useMovies";
import SideBar from "../SideBar";

const Home = () => {
  const { movies } = useMovies();

  return (
    <main>
      <SideBar/>
      <Catalog title="Complete Catalog" movies={movies} />
    </main>
  );
};

export default Home;
