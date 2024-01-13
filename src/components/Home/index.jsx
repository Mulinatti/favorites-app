import React, { useState } from "react";
import Catalog from "../Catalog";
import { useMovies } from "../../hooks/useMovies";
import SideBar from "../SideBar";

const Home = () => {
  const { movies, searchFilter, filterMovies } = useMovies();

  return (
    <main>
      <SideBar handleFilter={(value) => filterMovies(value)} />
      <Catalog
        title="All movies"
        movies={movies.filter((movie) => {
          if (searchFilter.length > 0)
            return searchFilter.includes(movie.category) && movie;
          else return movie;
        })}
      />
    </main>
  );
};

export default Home;
