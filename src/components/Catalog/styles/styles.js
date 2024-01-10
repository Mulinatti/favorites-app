import styled from "styled-components";

export const CatalogComponent = styled.section`
width: 100%;

h1 {
  text-align: center;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  place-items: center;
}
`