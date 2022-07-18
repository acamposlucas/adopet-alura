import styled from "styled-components";
import { BaseButton, BaseMainContainer } from "../../styles/components";

export const LoginContainer = styled(BaseMainContainer)`
  padding-block-start: 2rem;
  width: 90%;
  max-width: 1200px;

  & > * {
    width: 90%;
    max-width: 500px;
  }

  h1 {
    color: ${(props) => props.theme.colors["blue-400"]};
    margin-block-end: 2.5rem;
    text-align: center;
  }

  &:after {
    content: "";
    display: block;
    background-image: url("src/assets/paws.svg");
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
    top: 0;
    right: 0;
    width: 180px;
    height: 200px;
    position: absolute;
    z-index: 1;
  }
`;

export const FormContainer = styled.form`
  fieldset {
    border: 0;
  }

  legend {
    visibility: hidden;
    width: 1px;
    height: 1px;
    position: relative;
    top: 0;
    left: 0;
  }

  label {
    display: block;
    text-align: center;
    color: ${(props) => props.theme.colors["gray-500"]};
    position: relative;
    &:nth-child(odd) {
      margin-block-start: 1.5rem;
    }

    input {
      background-color: ${(props) => props.theme.colors["gray-100"]};
      border: 0;
      box-shadow: 0px 2px 2px ${(props) => props.theme.colors["black-100"]};
      border-radius: 6px;
      padding-block: 0.5rem;
      text-align: center;
      font-size: ${(props) => props.theme.fontSize["text-sm"]};
      line-height: ${(props) => props.theme.lineHeight["leading-normal"]};
      width: 100%;
    }

    button {
      border: 0;
      background-color: transparent;
      position: absolute;
      cursor: pointer;
      right: 0;
      top: 50%;
      transform: translateX(-50%);
      width: 16px;
      aspect-ratio: 1;
    }
  }

  a {
    display: block;
    margin-block-start: 0.5rem;
    text-align: center;
    text-decoration: none;
  }
`;

export const LoginButton = styled(BaseButton)`
  margin-block-start: 1.5rem;
  margin-inline: auto;
  width: calc(100% - 8rem);
  max-width: 11.25rem;
`;
