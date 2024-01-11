import React, { createContext, useState } from "react";
import moviesList from "../utils/moviesList.json"

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesList);
  const [sideBar, setSideBar] = useState(false);
 
  return (
    <MoviesContext.Provider value={{ movies, setMovies, sideBar, setSideBar }}>
      {children}
    </MoviesContext.Provider>
  );
};
