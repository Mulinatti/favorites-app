import { Star } from "lucide-react";
import React from "react";
import colors from "../../assets/colors";
import { LogoComponent } from "./styles/styles";

const Logo = () => {
  return (
    <LogoComponent>
      <h1>React-Favorites</h1>
      <Star size={28} color={colors.pear} fill={colors.pear}></Star>
    </LogoComponent>
  );
};

export default Logo;
