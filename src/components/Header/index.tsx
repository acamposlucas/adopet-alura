import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderContainer, LogoWrapper } from "./styles";
import HomeIcon from "../../assets/icons/house.svg";
import MailIcon from "../../assets/icons/mail.svg";
import Logo from "../Logo";
import { Avatar } from "../Avatar";

interface User {
  name: string;
  imageURL: string;
}

export const Header = () => {
  const location = useLocation();

  let currentUser = {
    name: "Joana Magalhães",
    imageURL: "src/assets/defaultProfile.png",
  };

  const [user, setUser] = useState<User>(currentUser);

  let isUserLoggedIn = false;

  if (
    location.pathname === "/home" ||
    location.pathname === "/mensagem" ||
    location.pathname === "/perfil"
  ) {
    isUserLoggedIn = true;
  }

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Link to="/" title="Página inicial">
        <img src={HomeIcon} alt="" />
      </Link>
      <Link to="/mensagem" title="Fale conosco">
        <img src={MailIcon} alt="" />
      </Link>
      {isUserLoggedIn ? (
        <Avatar imageURL={user.imageURL} name={user.name} />
      ) : null}
    </HeaderContainer>
  );
};
