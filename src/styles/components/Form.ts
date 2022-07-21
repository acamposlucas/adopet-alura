import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: ${(props) => props.theme.colors["gray-50"]};
  border-radius: 6px;
  display: grid;
  margin-block: 1rem;
  padding-block: 2rem;
  padding-inline: 1rem;
  gap: 1rem;
  width: 100%;
`;

export const Fieldset = styled.fieldset`
  border: 0;
`;

export const Legend = styled.legend``;

export const Label = styled.label`
  display: block;
  color: ${(props) => props.theme.colors["blue-400"]};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  line-height: ${(props) => props.theme.lineHeight["leading-normal"]};

  & > input,
  textarea {
    color: ${(props) => props.theme.colors["gray-200"]};
    font-size: ${(props) => props.theme.fontSize["text-sm"]};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.white};
  border: 0;
  border-radius: 6px;
  box-shadow: 0px 2px 4px ${(props) => props.theme.colors["black-100"]};
  display: block;
  margin-block-start: 0.5rem;
  padding-block: 0.875rem;
  padding-inline: 0.5rem;
  width: 100%;
`;

export const Textarea = styled.textarea`
  border: 0;
  border-radius: 6px;
  box-shadow: 0px 2px 4px ${(props) => props.theme.colors["black-100"]};
  margin-block-start: 0.5rem;
  padding-block: 1rem;
  padding-inline: 1rem;
  width: 100%;
  resize: none;
`;
