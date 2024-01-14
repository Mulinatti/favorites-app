import React, { createContext, useEffect, useState } from "react";
import moviesList from "../utils/moviesList.json"

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesList);
  const [sideBar, setSideBar] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log(favorites);
  }, [favorites])
 
  return (
    <MoviesContext.Provider value={{ movies, setMovies, sideBar, setSideBar, favorites, setFavorites }}>
      {children}
    </MoviesContext.Provider>
  );
};
