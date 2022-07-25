import styled from "styled-components";

export const AvatarContainer = styled.div`
  aspect-ratio: 1;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 100%;
  width: 40px;
  position: absolute;
  top: 2.5rem;
  right: 2rem;
`;
