import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding-block: clamp(3rem, 5vw, 10vw);
  width: 70%;
  margin-inline: auto;
  min-height: calc(100vh - 5rem);
  background-image: url("src/assets/pets.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const HeroContainer = styled.div`
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
  }
`;

export const InnerContainer = styled.div`
  a {
  }
`;
