import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../Footer";
import { Header } from "../Header";

const DefaultContainer = styled.div`
  background-image: url("src/assets/background-top-left.svg");
  background-position: top left;
  background-repeat: no-repeat;
  background-size: auto, auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 768px) {
    background-image: url("src/assets/background-lg-top-right.svg");
    background-position: top left;
  }
`;

const DefaultLayout = ({ backgroundColor }: { backgroundColor: string }) => {
  return (
    <DefaultContainer style={{ backgroundColor: backgroundColor }}>
      <Header />
      <Outlet />
      <Footer />
    </DefaultContainer>
  );
};

export default DefaultLayout;
