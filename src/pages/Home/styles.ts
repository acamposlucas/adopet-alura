import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding-block: clamp(5rem, 7vw, 10vw);
  width: 70%;
  margin-inline: auto;
  min-height: 100vh;
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
  gap: 1rem;

  strong {
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-size: ${(props) => props.theme.fontSize["text-lg"]};
    line-height: ${(props) => props.theme.lineHeight["leading-loose"]};
  }

  p {
    line-height: ${(props) => props.theme.lineHeight["leading-normal"]};
    text-align: center;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    flex: 1 1 auto;
  }
`;
