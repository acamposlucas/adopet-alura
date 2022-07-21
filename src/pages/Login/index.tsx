import { useState } from "react";
import { Eye, EyeSlash } from "phosphor-react";
import Logo from "../../components/Logo";
import { colors } from "../../styles/constants";
import { LogoWrapper } from "../../styles/helpers";
import { LoginContainer, FormContainer } from "./styles";
import { Button } from "../../styles/components/Button";

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
      <FormContainer>
        <fieldset className="fieldset">
          <legend>Login</legend>
          <label htmlFor="email">
            Email
            <input id="email" placeholder="Insira seu email" />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              placeholder="Insira sua senha"
            />
            <button type="button" onClick={handleTogglePasswordVisibility}>
              {isPasswordVisible ? (
                <Eye size={16} color="#999" />
              ) : (
                <EyeSlash size={16} color="#999" />
              )}
            </button>
          </label>
        </fieldset>
        <a href="#">Esqueci minha senha</a>
        <Button>Entrar</Button>
      </FormContainer>
    </LoginContainer>
  );
};
