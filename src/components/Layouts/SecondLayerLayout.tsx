import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const SecondLayerBackground = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url("src/assets/background-right-side.svg");
  background-position: right center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    background-image: url("src/assets/background-lg-right-side.svg");
    background-position: right top 25vw;
  }
  @media (min-width: 1440px) {
    background-image: url("src/assets/background-lg-right-side.svg");
    background-position: right center;
  }
`;

export const SecondLayerLayout = () => {
  return (
    <SecondLayerBackground>
      <Outlet />
    </SecondLayerBackground>
  );
};
