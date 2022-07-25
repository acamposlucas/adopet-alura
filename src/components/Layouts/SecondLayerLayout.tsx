import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const SecondLayerBackground = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url("src/assets/background-right-side.svg");
  background-position: right top;
  background-repeat: no-repeat;

  @media (min-width: 48rem) {
    background-image: url("src/assets/background-lg-right-side.svg");
    background-position: right top;
  }
`;

export const SecondLayerLayout = () => {
  return (
    <SecondLayerBackground>
      <Outlet />
    </SecondLayerBackground>
  );
};
