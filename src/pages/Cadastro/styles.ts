import styled from "styled-components";
import { BaseButton, BaseMainContainer } from "../../styles/components";

export const CadastroContainer = styled(BaseMainContainer)`
  padding-block-start: 2rem;
  width: 90%;
  max-width: 1200px;

  & > * {
    width: 90%;
    max-width: 500px;
  }

  section {
    color: ${(props) => props.theme.colors["blue-400"]};
    text-align: center;

    h2 {
      margin-bottom: 0.5rem;
    }
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
  margin-block: 1rem;
  margin-inline: auto;
  text-align: center;
  width: calc(100% - 2rem);
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  label {
    color: ${(props) => props.theme.colors["gray-500"]};
    display: block;
    line-height: ${(props) => props.theme.lineHeight["leading-normal"]};
    margin-bottom: 0.5rem;
  }

  input {
    background-color: ${(props) => props.theme.colors["gray-100"]};
    border: 0;
    border-radius: 6px;
    box-shadow: 0px 2px 2px ${(props) => props.theme.colors["black-100"]};
    color: ${(props) => props.theme.colors["gray-200"]};
    font-size: ${(props) => props.theme.fontSize["text-xs"]};
    padding-block: 0.625rem;
    text-align: center;
    width: 100%;

    @media (min-width: 1024px) {
      input[data-type="password"] {
        max-width: 20rem;
      }
    }
  }

  span {
    cursor: pointer;
    position: absolute;
    right: 0.5rem;
    bottom: -0.5rem;
    transform: translateY(-50%);
  }
`;

export const SubscribeButton = styled(BaseButton)`
  max-width: fit-content;
  margin-inline: auto;
  padding-inline: 2rem;
  margin-block-start: 2rem;
`;
