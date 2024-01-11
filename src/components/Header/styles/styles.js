import styled from "styled-components";
import colors from "../../../assets/colors.js";

export const HeaderComponent = styled.header`
  background-color: ${colors.viridian};
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  

  div {
    display: flex;
    align-items: center;

    i {
      cursor: pointer;
    }
  }

  nav {
    * {
      margin: 0 1rem;
      text-decoration: none;
      transition: all 0.2s ease-out;

      &:hover {
        color: ${colors.pear};
      }
    }
  }
`;
