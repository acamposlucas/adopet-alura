import Logo from "../../components/Logo";
import { BaseButton } from "../../styles/components";
import { HeroContainer, HomeContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { LogoWrapper } from "../../styles/helpers";
import { colors } from "../../styles/constants";

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
        <BaseButton as={"div"}>
          <NavLink to={"/login"}>Já tenho conta</NavLink>
        </BaseButton>
        <BaseButton as={"a"}>
          <NavLink to={"/cadastro"}>Quero me cadastrar</NavLink>
        </BaseButton>
      </HeroContainer>
    </HomeContainer>
  );
};
