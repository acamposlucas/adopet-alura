import { useState } from "react";
import { Eye, EyeSlash } from "phosphor-react";
import Logo from "../../components/Logo";
import { colors } from "../../styles/constants";
import { LogoWrapper } from "../../styles/helpers";
import { LoginContainer } from "./styles";
import { Button } from "../../styles/components/Button";
import {
  FormLink,
  SecondaryFormContainer,
  SecondaryInput,
  SecondaryLabel,
} from "../../styles/components/SecondaryForm";

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function handleTogglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <LoginContainer>
      <LogoWrapper>
        <Logo color={colors.secondary} />
      </LogoWrapper>
      <h1>Já tem uma conta? Faça o seu login:</h1>
      <SecondaryFormContainer>
        <SecondaryLabel htmlFor="email">
          Email
          <SecondaryInput
            id="email"
            type="text"
            placeholder="Insira seu email"
          />
        </SecondaryLabel>
        <SecondaryLabel htmlFor="password">
          Senha
          <SecondaryInput
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Insira sua senha"
          />
          <span role="button" onClick={handleTogglePasswordVisibility}>
            {isPasswordVisible ? (
              <Eye size={16} color="#999" />
            ) : (
              <EyeSlash size={16} color="#999" />
            )}
          </span>
        </SecondaryLabel>
        <FormLink href="#">Esqueci minha senha</FormLink>
        <Button>Entrar</Button>
      </SecondaryFormContainer>
    </LoginContainer>
  );
};
