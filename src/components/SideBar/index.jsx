import React, { useContext, useState } from "react";
import { SideBarComponent } from "./styles/styles";
import { MoviesContext } from "../../contexts/moviesContext";
import categories from "../../utils/categories.json";
import { Check } from "lucide-react";
import colors from "../../assets/colors";

const SideBar = ({ handleFilter }) => {
  const { sideBar } = useContext(MoviesContext);
  const [clicked, setClicked] = useState([]);

  console.log(clicked);
  return (
    <SideBarComponent $sideBar={sideBar}>
      <p>Categorias</p>
      <menu>
        {/*Filtrando por nome por enquanto, moviesList.json tem que ser alterado 
        para receber o objeto categoria com id e nome*/}
        {categories.map((category) => (
          <li
            onClick={() => {
              handleFilter(category.name);
              if (clicked.includes(category.id))
                return setClicked(clicked.filter((id) => id !== category.id));
              setClicked([...clicked, category.id]);
            }}
            key={category.id}
          >
            {category.name}
            {clicked.includes(category.id) && (
              <Check color={colors.viridian} size={17} />
            )}
          </li>
        ))}
      </menu>
    </SideBarComponent>
  );
};

export default SideBar;
