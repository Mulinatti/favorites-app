import styled from "styled-components";
import colors from "../../../assets/colors"

export const CardComponent = styled.li`

  list-style: none;

  figure {
    border-radius: 10px;
    overflow: hidden;
    background-color: ${colors.viridian};
  }

  &:hover {
    span {
      display: inline;
    }
  }

  span {
    background-color: #ffffff50;
    padding: 10px;
    position: absolute;
    top: 5px;
    right: 5px;
    display: none;

    border-radius: 5px;
  }

  figcaption {
    font-weight: 600;
  }

  div:first-child {
    width: 250px;
    height: 350px;
    background-image: url(${props => props.$cover});
    background-position: center;
    background-size: cover;
    position: relative;
  }

  div:last-child {
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      cursor: pointer;

      &:hover {
        scale: 1.10;
      }
    }
  }
`