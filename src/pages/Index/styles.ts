import styled from "styled-components";
import { BaseMainContainer } from "../../styles/components";

export const HomeContainer = styled(BaseMainContainer)`
  background-image: url("src/assets/pets.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: auto;
  min-height: 110vh;

  @media (min-width: 768px) {
    background-image: url("src/assets/pets-lg.svg");
    background-position: center bottom -1rem;
    min-height: 85vh;
  }
`;

export const HeroContainer = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 1rem, 2rem);
  width: calc(80vw - 2rem);
  padding-inline: 2rem;
  max-width: 30rem;
  padding-block-start: min(10vh, 12rem);

  @media (min-width: 1440px) {
    padding-block-start: 0;
  }

  p {
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-size: ${(props) => props.theme.fontSize["text-2xl"]};
    line-height: ${(props) => props.theme.lineHeight["leading-loose"]};

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.fontSize["text-3xl"]};
    }
  }

  h1 {
    line-height: ${(props) => props.theme.lineHeight["leading-normal"]};
    text-align: center;

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.fontSize["text-md"]};
    }
  }
`;
