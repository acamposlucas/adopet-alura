import styled from "styled-components";

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  gap: 3.5rem;
  justify-content: flex-start;
  padding-block: 3rem;

  .logo {
    display: none;
  }

  @media (min-width: 768px) {
    .logo {
      display: block;
    }
  }
`;
