import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const SecondLayerBackground = styled.div`
  background-image: url("src/assets/background-right-side.svg");
  background-position: right center;
  background-repeat: no-repeat;
`;

export const SecondLayerLayout = () => {
  return (
    <SecondLayerBackground>
      <Outlet />
    </SecondLayerBackground>
  );
};
