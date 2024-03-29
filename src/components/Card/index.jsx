import { Heart } from "lucide-react";
import React from "react";
import { CardComponent } from "./styles/styles";
import colors from "../../assets/colors";
import { useMovies } from "../../hooks/useMovies";

const Card = ({ movie }) => {
  const { name, category, img, favorite } = movie;
  const { setFavoriteMovie, favorites } = useMovies();

  return (
    <CardComponent $cover={img}>
      <figure>
        <div>
          <span>{category}</span>
        </div>
        <div>
          <figcaption>{name}</figcaption>
          <i onClick={() => setFavoriteMovie(movie)}>
            {favorites.includes(movie) ? (
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
