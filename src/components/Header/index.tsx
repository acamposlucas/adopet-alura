import { HeaderContainer, LogoWrapper } from "./styles";
import HomeIcon from "../../assets/icons/house.svg";
import MailIcon from "../../assets/icons/mail.svg";
import Logo from "../Logo";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Link to="/" title="Homepage">
        <img src={HomeIcon} alt="" />
      </Link>
      <a href="#" title="Mail us">
        <img src={MailIcon} alt="" />
      </a>
    </HeaderContainer>
  );
};
