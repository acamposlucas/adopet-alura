import styled from "styled-components";
import { BaseMainContainer } from "../../styles/components";

export const CadastroContainer = styled(BaseMainContainer)`
  &:after {
    content: "";
    display: block;
    background-image: url("src/assets/paws.svg");
    background-repeat: no-repeat;
    background-position: right top;
    top: 0;
    right: 0;
    width: 30vw;
    height: 25vh;
    position: absolute;
  }
`;

export const ContentContainer = styled.div`
  padding-inline: 2rem;
`;

export const FormContainer = styled.form`
  margin-block: 2rem;
  align-items: center;
  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

export const InputGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const InputContainer = styled.div`
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
    max-width: 32rem;
    min-width: 20rem;
    padding-block: 0.5rem;
    text-align: center;
    width: 100%;
  }
`;
