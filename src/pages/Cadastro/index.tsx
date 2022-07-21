import { useState } from "react";
import Logo from "../../components/Logo";
import { colors } from "../../styles/constants";
import { LogoWrapper } from "../../styles/helpers";
import { Eye, EyeSlash } from "phosphor-react";
import {
  CadastroContainer,
  FormContainer,
  InputContainer,
  SubscribeButton,
} from "./styles";
import { Button } from "../../styles/components/Button";
import {
  SecondaryFormContainer,
  SecondaryInput,
  SecondaryLabel,
} from "../../styles/components/SecondaryForm";

export const Cadastro = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState<boolean>(false);

  const handleTogglePasswordVisibility = (inputID: string) => {
    return (event: React.MouseEvent) => {
      inputID === "password"
        ? setIsPasswordVisible(!isPasswordVisible)
        : setIsPasswordConfirmationVisible(!isPasswordConfirmationVisible);
      event.preventDefault();
    };
  };

  return (
    <CadastroContainer>
      <LogoWrapper>
        <Logo color={colors.secondary} />
      </LogoWrapper>
      <section>
        <h2>Ainda não tem cadastro?</h2>
        <p>
          Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </p>
      </section>
      <SecondaryFormContainer>
        <SecondaryLabel htmlFor="email">
          Email
          <SecondaryInput id="email" placeholder="Escolha seu melhor email" />
        </SecondaryLabel>
        <SecondaryLabel htmlFor="name">
          Nome
          <SecondaryInput id="name" placeholder="Digite seu nome completo" />
        </SecondaryLabel>
        <SecondaryLabel htmlFor="password">
          Senha
          <SecondaryInput
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            placeholder="Crie uma senha"
          />
          <span
            onClick={handleTogglePasswordVisibility("password")}
            role="button"
            aria-label="toggle password visibility"
          >
            {isPasswordVisible ? (
              <EyeSlash size={16} color="#999" />
            ) : (
              <Eye size={16} color="#999" />
            )}
          </span>
        </SecondaryLabel>
        <SecondaryLabel htmlFor="passwordConfirmation">
          Confirme sua senha
          <SecondaryInput
            type={isPasswordConfirmationVisible ? "text" : "password"}
            id="passwordConfirmation"
            placeholder="Confirme sua senha"
          />
          <span
            onClick={handleTogglePasswordVisibility("passwordConfirmation")}
            role="button"
            aria-label="toggle password visibility"
          >
            {isPasswordConfirmationVisible ? (
              <EyeSlash size={16} color="#999" />
            ) : (
              <Eye size={16} color="#999" />
            )}
          </span>
        </SecondaryLabel>

        <Button type="submit">Cadastrar</Button>
      </SecondaryFormContainer>
    </CadastroContainer>
  );
};
