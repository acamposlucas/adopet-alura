import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors["green-400"]};
  text-align: center;
  padding-block: 2.5rem;

  p {
    color: ${(props) => props.theme.colors.white};
    line-height: ${(props) => props.theme.lineHeight["leading-normal"]};
  }
`;
