import styled from "styled-components";

interface ButtonProps {
  maxWidth: number;
}

export const BaseButton = styled.button<ButtonProps>`
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
  width: calc(100% - 1rem);
`;

export const BaseMainContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-block: clamp(1rem, 3vw, 12vw);
  margin-inline: auto;
  min-height: 100vh;
  width: calc(100vw - var(--marginInline));
  max-width: 1200px;
`;
