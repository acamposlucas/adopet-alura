import styled from "styled-components";

export const PetListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, auto));
  gap: 1rem;
  margin-inline: auto;
  max-width: 1120px;

  @media (min-width: 768px) {
    padding-inline: 2rem;
    grid-template-columns: repeat(2, minmax(0, auto));
    place-items: center;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, auto));
  }
`;
