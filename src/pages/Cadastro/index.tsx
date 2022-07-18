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

export const Cadastro = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function handleTogglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }
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
      <FormContainer>
        <InputContainer>
          <label>Email</label>
          <input
            data-type="password"
            type={"email"}
            placeholder="Escolha seu melhor email"
          />
        </InputContainer>
        <InputContainer>
          <label>Nome</label>
          <input type={"text"} placeholder="Digite seu nome completo" />
        </InputContainer>
        <InputContainer>
          <label>Senha</label>
          <input
            data-type="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Crie uma senha"
          />
          <span
            onClick={handleTogglePasswordVisibility}
            role="button"
            aria-label="toggle password visibility"
          >
            {isPasswordVisible ? (
              <EyeSlash size={16} color="#999" />
            ) : (
              <Eye size={16} color="#999" />
            )}
          </span>
        </InputContainer>
        <InputContainer>
          <label>Confirme sua senha</label>
          <input type={"password"} placeholder="Confirme sua senha" />
          <span
            onClick={handleTogglePasswordVisibility}
            role="button"
            aria-label="toggle password visibility"
          >
            {isPasswordVisible ? (
              <EyeSlash size={16} color="#999" />
            ) : (
              <Eye size={16} color="#999" />
            )}
          </span>
        </InputContainer>
        <SubscribeButton type="submit">Cadastrar</SubscribeButton>
      </FormContainer>
    </CadastroContainer>
  );
};
