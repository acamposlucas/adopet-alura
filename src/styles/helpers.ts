import styled from "styled-components";

export const LogoWrapper = styled.div`
  min-width: 190px;
  width: 100%;
  max-width: 260px;
  height: minmax(48px, 64px);
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors["blue-400"]};
  font-size: ${(props) => props.theme.fontSize["text-base"]};
  text-align: center;
  line-height: ${(props) => props.theme.lineHeight["leading-snug"]};

  @media (min-width: 48rem) {
    font-size: ${(props) => props.theme.fontSize["text-md"]};
  }
`;
