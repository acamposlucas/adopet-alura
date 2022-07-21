import Logo from "../../components/Logo";
import { HeroContainer, HomeContainer, IndexButton } from "./styles";
import { NavLink } from "react-router-dom";
import { LogoWrapper } from "../../styles/helpers";

export const Index = () => {
  return (
    <HomeContainer>
      {
        //TODO: fix padding-block on tablet screen
      }
      <HeroContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <strong>Boas-vindas!</strong>
        <p>
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </p>
        <NavLink to={"/login"}>
          <IndexButton width="180px" as="span">
            Já tenho conta
          </IndexButton>
        </NavLink>
        <NavLink to={"/cadastro"}>
          <IndexButton as="span">Quero me cadastrar</IndexButton>
        </NavLink>
      </HeroContainer>
    </HomeContainer>
  );
};
