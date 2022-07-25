import styled from "styled-components";

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  gap: 3.5rem;
  justify-content: flex-start;
  padding-block: 2rem;
  padding-inline: clamp(3rem, 5vw, 8vw);
  z-index: 9999;
`;

export const LogoWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 128px;
  }
`;
