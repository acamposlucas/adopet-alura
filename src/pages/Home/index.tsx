import Logo from "../../components/Logo";
import { BaseButton } from "../../styles/components";
import { HeroContainer, HomeContainer, LogoWrapper } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <HeroContainer>
        <LogoWrapper>
          <Logo style={{ display: "block", marginInline: "auto" }} />
        </LogoWrapper>
        <strong>Boas-vindas!</strong>
        <p>
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </p>
        <BaseButton as={"a"} maxWidth={180}>
          Já tenho conta
        </BaseButton>
        <BaseButton as={"a"} maxWidth={180}>
          Quero me cadastrar
        </BaseButton>
      </HeroContainer>
    </HomeContainer>
  );
};

export default Home;
