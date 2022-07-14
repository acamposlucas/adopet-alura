import Logo from "../../components/Logo";
import { InnerContainer, HeroContainer, HomeContainer } from "./styles";

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
          <a>Já tenho uma conta</a>
          <a>Quero me cadastrar</a>
        </InnerContainer>
      </HeroContainer>
    </HomeContainer>
  );
};

export default Home;
