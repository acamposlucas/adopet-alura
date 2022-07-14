import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding-block: clamp(3rem, 5vw, 10vw);
  width: 70%;
  margin-inline: auto;
  min-height: 100vh;
  background-image: url("src/assets/pets.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const HeroContainer = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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
