import styled from "styled-components";

export const MensagemContainer = styled.main`
  flex: 1;
  padding-inline: 1.5rem;
  padding-block: clamp(3rem, 8rem, 5vh);
  max-width: 1200px;
  margin-inline: auto;
`;

export const MensagemInnerContainer = styled.div`
  max-width: 37.5rem;

  h1 {
    width: calc(100% - 1rem);
  }
`;
