import styled from "styled-components";

interface ButtonProps {
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${(props) => props.theme.colors["red-400"]};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: flex;
  font-size: ${(props) => props.theme.fontSize["text-base"]};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  justify-content: center;
  padding-block: 0.5rem;
  padding-inline: 1.5rem;
  line-height: normal;
  margin-inline: auto;
  text-decoration: none;
  transition: color 0.5s ease-in;
  width: 9.25rem;
  height: 2.5rem;

  &:hover {
    background-color: ${(props) => props.theme.colors["red-200"]};
  }

  &:focus-visible,
  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 48rem) {
    width: 10.25rem;
  }
`;
