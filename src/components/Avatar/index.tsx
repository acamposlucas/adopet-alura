import { AvatarContainer } from "./styles";

export const Avatar = ({
  imageURL = "src/assets/icons/profile.svg",
  name = "",
}: {
  imageURL: string;
  name: string;
}) => {
  return (
    <AvatarContainer>
      <img src={imageURL} alt={name} />
    </AvatarContainer>
  );
};
