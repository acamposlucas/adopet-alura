import styled from "styled-components";

export const BaseButton = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.colors["red-400"]};
  border: 0;
  border-radius: 6px;
  box-shadow: 2px 2px 4px ${(props) => props.theme.colors["black-100"]};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: flex;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  justify-content: center;
  height: 48px;
  line-height: ${(props) => props.theme.lineHeight["leading-normal"]};
  padding-block: 0.5rem;
  padding-inline: 0.5rem;
  width: 9.25rem;
`;

export const BaseMainContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-inline: auto;
  min-height: 100vh;
  max-width: 1200px;
`;
