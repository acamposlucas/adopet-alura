import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../Header";

const DefaultContainer = styled.div`
  background-image: url("src/assets/background-top-left.svg"),
    url("src/assets/background-right-side.svg");
  background-position: top left, right 50vw;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors["blue-400"]};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-inline: clamp(3rem, 5vw, 8vw);

  @media (min-width: 768px) {
    background-image: url("src/assets/background-lg-top-right.svg"),
      url("src/assets/background-lg-right-side.svg");
    background-position: top left, right center;
  }
`;

const DefaultLayout = () => {
  return (
    <DefaultContainer>
      <Header />
      <Outlet />
    </DefaultContainer>
  );
};

export default DefaultLayout;
