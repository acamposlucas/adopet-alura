import Logo from "../../components/Logo";
import { colors } from "../../styles/constants";
import { LogoWrapper } from "../../styles/helpers";
import {
  CadastroContainer,
  ContentContainer,
  FormContainer,
  InputContainer,
  InputGrid,
} from "./styles";

export const Cadastro = () => {
  return (
    <CadastroContainer>
      <ContentContainer>
        <LogoWrapper>
          <Logo color={colors.primary} />
        </LogoWrapper>
        <section>
          <h2>Ainda não tem cadastro?</h2>
          <p>
            Então, antes de buscar seu melhor amigo, precisamos de alguns dados
          </p>

          <FormContainer>
            <InputGrid>
              <InputContainer>
                <label>Email</label>
                <input type={"email"} placeholder="Escolha seu melhor email" />
              </InputContainer>
              <InputContainer>
                <label>Nome</label>
                <input type={"text"} placeholder="Digite seu nome completo" />
              </InputContainer>
              <InputContainer>
                <label>Senha</label>
                <input type={"password"} placeholder="Crie uma senha" />
              </InputContainer>
              <InputContainer>
                <label>Confirme sua senha</label>
                <input type={"password"} placeholder="Confirme sua senha" />
              </InputContainer>
            </InputGrid>
            <button type="submit">Cadastrar</button>
          </FormContainer>
        </section>
      </ContentContainer>
    </CadastroContainer>
  );
};
