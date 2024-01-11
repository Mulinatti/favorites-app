import React, { useContext, useState } from "react";
import "./styles/styles.js";
import * as styles from "./styles/styles.js";
import { Menu, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/index.jsx";
import colors from "../../assets/colors.js";
import { MoviesContext } from "../../contexts/moviesContext.jsx";

const Header = () => {
  const [hover, setHover] = useState(false);
  const {sideBar, setSideBar} = useContext(MoviesContext);

  return (
    <styles.HeaderComponent>
      <div>
        <i onClick={() => setSideBar(!sideBar)}>
          <Menu
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            color={hover ? colors.pear : colors.lavender}
            size={28}
          />
        </i>
        <Logo />
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </styles.HeaderComponent>
  );
};

export default Header;
