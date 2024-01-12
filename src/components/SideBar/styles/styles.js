import styled from "styled-components";
import colors from "../../../assets/colors";

export const SideBarComponent = styled.aside`
  
  background-color: ${colors.onyx};
  box-shadow: 1px 2px 3px #000;

  animation: sideBarAnimation .4s ease-in-out backwards;
  
  display: ${props => props.$sideBar ? "block" : "none"};

  width: 200px;
  height: 100vh;
  z-index: 1;
  position: absolute;
  top : 0;
  left: 0;

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
      text-transform: capitalize;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background-color: #ffffff20;
        transition: all .2s ease-in-out;
      }
    }
  }

  @keyframes sideBarAnimation {
    from {
      left: -100vw;
    }

    to {
      left: 0;
    }
  }
`