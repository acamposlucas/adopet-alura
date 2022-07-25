import Logo from "../../components/Logo";
import { HeroContainer, HomeContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { LogoWrapper } from "../../styles/helpers";
import { StyledNavLink } from "../../styles/components/Button";

export const Index = () => {
  return (
    <HomeContainer>
      <HeroContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <p>Boas-vindas!</p>
        <h1>
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </h1>
        <StyledNavLink to={"/login"}>Já tenho conta</StyledNavLink>
        <StyledNavLink to={"/cadastro"}>Quero me cadastrar</StyledNavLink>
      </HeroContainer>
    </HomeContainer>
  );
};
