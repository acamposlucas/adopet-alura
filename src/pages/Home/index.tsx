import { PetList } from "./components/PetList";
import { AvatarContainer, HomeContainer } from "./styles";

export const Home = () => {
  return (
    <div>
      <AvatarContainer>
        <strong>LA</strong>
      </AvatarContainer>
      <HomeContainer>
        <PetList />
      </HomeContainer>
    </div>
  );
};
