import styled from "styled-components";
import { BaseMainContainer } from "../../styles/components";
import { Button } from "../../styles/components/Button";

export const HomeContainer = styled(BaseMainContainer)`
  background-image: url("src/assets/pets.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: auto;

  @media (min-width: 768px) {
    background-image: url("src/assets/pets-lg.svg");
    background-position: center bottom -1rem;
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

  strong {
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-size: ${(props) => props.theme.fontSize["text-2xl"]};
    line-height: ${(props) => props.theme.lineHeight["leading-loose"]};

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.fontSize["text-3xl"]};
    }
  }

  p {
    line-height: ${(props) => props.theme.lineHeight["leading-normal"]};
    text-align: center;

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.fontSize["text-md"]};
    }
  }
`;

export const IndexButton = styled(Button)`
  width: 11.25rem;
  padding-inline: 0;

  @media (min-width: 48rem) {
    width: 21.5rem;
  }
`;
