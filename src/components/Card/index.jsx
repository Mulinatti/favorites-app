import { Heart } from "lucide-react";
import React from "react";
import { CardComponent } from "./styles/styles";
import colors from "../../assets/colors";
import { useMovies } from "../../hooks/useMovies";

const Card = ({ movie }) => {
  const {id, name, category, img, favorite } = movie;
  const { setFavorites } = useMovies();

  return (
    <CardComponent $cover={img}>
      <figure>
        <div>
          <span>{category}</span>
        </div>
        <div>
          <figcaption>{name}</figcaption>
          <i onClick={() => setFavorites(id)}>
            {favorite ? (
              <Heart color="#99363650" fill={colors.crayola} />
            ) : (
              <Heart />
            )}
          </i>
        </div>
      </figure>
    </CardComponent>
  );
};

export default Card;
