import React, { useContext } from "react";
import { SideBarComponent } from "./styles/styles";
import { MoviesContext } from "../../contexts/moviesContext";

const SideBar = () => {
  const {sideBar} = useContext(MoviesContext);

  return (
    <SideBarComponent $sideBar={sideBar}>
      <p>Categorias</p>
      <menu>
        <li>Action</li>
        <li>Adventure</li>
        <li>Suspense</li>
        <li>Comedy</li>
      </menu>
    </SideBarComponent>
  );
};

export default SideBar;
