import styled from 'styled-components';
import colors from '../../../assets/colors.js';

export const HeaderComponent = styled.header`
  background-color: ${colors.viridian};
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  nav {
    * {
      margin: 0 1rem;
      text-decoration: none;
      
      &:hover {
        color: ${colors.pear};
        transition: all .25s  ;
      }
    }
  }

`
