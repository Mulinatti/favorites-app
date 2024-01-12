import React, { useState } from "react";
import Catalog from "../Catalog";
import { useMovies } from "../../hooks/useMovies";
import SideBar from "../SideBar";

const Home = () => {
  const { movies } = useMovies();

  const [searchFilter, setSearchFilter] = useState("");

  return (
    <main>
      <SideBar handleFilter={value => setSearchFilter(value)}/>
      <Catalog title="Complete Catalog" movies={movies.filter(movie => {
        if(searchFilter !== "")
          return movie.category === searchFilter && movie;
        else return movie;
      })} />
    </main>
  );
};

export default Home;
