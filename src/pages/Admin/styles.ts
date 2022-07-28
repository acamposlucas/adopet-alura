import styled from "styled-components";
import { SecondaryFormContainer } from "../../styles/components/SecondaryForm";

export const AdminContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const AdminFormContainer = styled(SecondaryFormContainer)`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 48em) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    & > label[for="petBehavior"],
    label[for="petImage"],
    button {
      grid-column: span 2;
    }
  }
`;
