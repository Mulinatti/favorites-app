import styled from "styled-components";
import colors from "../../../assets/colors";

export const SideBarComponent = styled.aside`
  
  background-color: ${colors.onyx};
  box-shadow: 1px 2px 3px #000;
  
  display: ${props => props.$sideBar ? "block" : "none"};

  width: 200px;
  height: 100vh;
  z-index: 1;
  position: absolute;
  top : 0;

  p {
    text-align: center;
    margin: 0;
    padding: 1rem;
    border-bottom: 1px solid #ffffff50;
  }

  menu {
    margin: 0;
    list-style: none;
    padding: 0;

    li {
      cursor: pointer;
      padding: 1rem;

      &:hover {
        background-color: #ffffff20;
        transition: all .2s ease-in-out;
      }
    }
  }
`