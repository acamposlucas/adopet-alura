import styled from "styled-components";

export const SecondaryFormContainer = styled.form`
  display: grid;
  margin-block: 1rem;
  padding-block: 2rem;
  padding-inline: 1rem;
  gap: 1rem;
  width: 100%;
  max-width: 37.5rem;
  margin-inline: auto;
`;

export const SecondaryLabel = styled.label`
  display: block;
  color: ${(props) => props.theme.colors["gray-500"]};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  line-height: ${(props) => props.theme.lineHeight["leading-normal"]};
  position: relative;
  text-align: center;

  span {
    cursor: pointer;
    position: absolute;
    right: 1rem;
    bottom: 0.3rem;
  }
`;

export const SecondaryInput = styled.input`
  background-color: ${(props) => props.theme.colors["gray-100"]};
  border: 0;
  box-shadow: 0px 2px 2px ${(props) => props.theme.colors["black-100"]};
  border-radius: 6px;
  color: ${(props) => props.theme.colors["gray-200"]};
  font-size: ${(props) => props.theme.fontSize["text-sm"]};
  line-height: ${(props) => props.theme.lineHeight["leading-normal"]};
  margin-block-start: 0.5rem;
  padding-block: 0.5rem;
  text-align: center;
  width: 100%;
`;

export const FormLink = styled.a`
  color: ${(props) => props.theme.colors["red-400"]};
  display: inline-block;
  font-size: ${(props) => props.theme.fontSize["text-xs"]};
  text-align: center;
  text-decoration: underline;
`;
