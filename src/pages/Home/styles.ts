import styled from "styled-components";

export const AvatarContainer = styled.div`
  align-items: center;
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors["green-400"]};
  width: 40px;
`;

export const HomeContainer = styled.main`
  padding-block: 2rem;

  section {
    padding-block-end: 2rem;

    h2 {
      text-align: center;
      color: ${(props) => props.theme.colors["blue-400"]};
      width: calc(100% - 40vw);
      margin-inline: auto;
      line-height: ${(props) => props.theme.lineHeight["leading-snug"]};
    }
  }
`;

export const PetList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, auto));
`;
