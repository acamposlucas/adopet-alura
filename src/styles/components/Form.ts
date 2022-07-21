import styled from "styled-components";
import { BaseButton } from "../components";

const MX_4 = `1rem`;

export const FormContainer = styled.form`
  background-color: ${(props) => props.theme.colors["gray-50"]};
  border-radius: 6px;
  display: grid;
  margin-block: 1rem;
  padding-block: 2rem;
  padding-inline: ${MX_4};
  gap: 1rem;
  width: 100%;
  max-width: 37.5rem;
  margin-inline: auto;
`;

export const Fieldset = styled.fieldset`
  border: 0;
  display: contents;
`;

export const Legend = styled.legend`
  display: block;
  text-align: center;
  color: ${(props) => props.theme.colors["gray-500"]};
  font-size: ${(props) => props.theme.fontSize["text-xl"]};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  line-height: ${(props) => props.theme.lineHeight["leading-normal"]};
`;

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

  & > span {
    color: ${(props) => props.theme.colors["red-400"]};
    display: block;
    font-weight: ${(props) => props.theme.fontWeight.regular};
    font-size: ${(props) => props.theme.fontSize["text-xs"]};
    text-align: center;
    margin-block: 0.5rem;
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

  &[type="file"] {
    display: none;
  }
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

export const FormButton = styled(BaseButton)`
  margin-inline: auto;
  padding-inline: 3rem;
  width: fit-content;
`;

export const ProfileAvatar = styled.img`
  aspect-ratio: 1;
  border-radius: 100%;
  cursor: pointer;
  display: block;
  margin-inline: auto;
  width: 80px;
`;
