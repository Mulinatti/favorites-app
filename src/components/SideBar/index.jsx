import React, { useContext } from "react";
import { SideBarComponent } from "./styles/styles";
import { MoviesContext } from "../../contexts/moviesContext";
import categories from "../../utils/categories.json";

const SideBar = ({ handleFilter }) => {
  const { sideBar } = useContext(MoviesContext);

  return (
    <SideBarComponent $sideBar={sideBar}>
      <p>Categorias</p>
      <menu>
        {/*Filtrando por nome por enquanto, moviesList.json tem que ser alterado 
        para receber o objeto categoria com id e nome*/}
        {categories.map((category) => (
          <li onClick={() => handleFilter(category.name)} key={category.id}>
            {category.name}
          </li>
        ))}
      </menu>
    </SideBarComponent>
  );
};

export default SideBar;
