import React from "react";
import { CatalogComponent } from "./styles/styles";
import Card from "../Card";

const Catalog = ({movies, title}) => {
  return (
    <CatalogComponent>
      <div>
        <h1>{title}</h1>
        <ul>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </CatalogComponent>
  );
};

export default Catalog;
