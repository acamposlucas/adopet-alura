import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors["gray-50"]};
  max-height: 12.5rem;
  padding-block: 1rem;
  padding-inline: 1rem;
  box-shadow: 3px 2px 5px ${(props) => props.theme.colors["black-100"]};

  @media (min-width: 400px) {
    margin-inline: auto;
    width: 100%;
    max-width: 22.5rem;
  }
`;

export const CardInnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;

export const PetDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > .description {
    h3 {
      color: ${(props) => props.theme.colors["blue-400"]};
      line-height: ${(props) => props.theme.lineHeight["leading-relaxed"]};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      margin-block-end: 0.5rem;
    }

    p {
      color: ${(props) => props.theme.colors["black-800"]};
      font-size: ${(props) => props.theme.fontSize["text-sm"]};
      line-height: ${(props) => props.theme.lineHeight["leading-normal"]};
    }
  }

  & > .local {
    color: ${(props) => props.theme.colors["black-800"]};

    p {
      line-height: ${(props) => props.theme.lineHeight["leading-relaxed"]};
      font-size: ${(props) => props.theme.fontSize["text-xs"]};
      margin-block-end: 0.5rem;
    }

    a {
      font-size: ${(props) => props.theme.fontSize["text-xxs"]};
      display: flex;
      gap: 0.5rem;
      color: ${(props) => props.theme.colors["black-800"]};
      text-decoration: none;

      &:visited {
        color: ${(props) => props.theme.colors["black-800"]};
      }

      &:before {
        content: "";
        display: inline-block;
        background: url("src/assets/icons/message.svg");
        width: 18px;
        height: 18px;
      }
    }
  }
`;
