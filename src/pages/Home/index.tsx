import Logo from "../../components/Logo";
import { BaseButton } from "../../styles/components";
import { HeroContainer, HomeContainer, InnerContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <HeroContainer>
        <Logo
          width={190}
          height={48}
          style={{ display: "block", marginInline: "auto" }}
        />
        <strong>Boas-vindas!</strong>
        <p>
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </p>
        <InnerContainer>
          <BaseButton as={"a"} maxWidth={180}>
            Já tenho conta
          </BaseButton>
          <BaseButton as={"a"} maxWidth={180}>
            Quero me cadastrar
          </BaseButton>
        </InnerContainer>
      </HeroContainer>
    </HomeContainer>
  );
};

export default Home;
