import { HeaderContainer } from "./styles";
import HomeIcon from "../../assets/icons/house.svg";
import MailIcon from "../../assets/icons/mail.svg";
import Logo from "../Logo";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo width={128} height={32} className="logo" />
      <a href="#" title="Homepage">
        <img src={HomeIcon} alt="" />
      </a>
      <a href="#" title="Mail us">
        <img src={MailIcon} alt="" />
      </a>
    </HeaderContainer>
  );
};
