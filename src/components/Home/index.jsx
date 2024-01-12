import React, { useState } from "react";
import Catalog from "../Catalog";
import { useMovies } from "../../hooks/useMovies";
import SideBar from "../SideBar";

const Home = () => {
  const { movies } = useMovies();

  const [searchFilter, setSearchFilter] = useState([]);

  return (
    <main>
      <SideBar handleFilter={value => {
        if(searchFilter.includes(value))
          return setSearchFilter(searchFilter.filter(category => category !== value))
        setSearchFilter([...searchFilter, value])
      }}/>
      <Catalog title="Complete Catalog" movies={movies.filter(movie => {
        if(searchFilter.length > 0)
          return searchFilter.includes(movie.category) && movie;
        else return movie;
      })} />
    </main>
  );
};

export default Home;
