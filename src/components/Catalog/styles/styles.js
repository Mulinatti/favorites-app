import styled from "styled-components";

export const CatalogComponent = styled.section`
width: 100%;

h1 {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  margin: 0;
}

ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  place-items: center;
  margin: 0;
}
`