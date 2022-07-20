import React from "react";
import { CardContainer, CardInnerContainer, PetDetails } from "./styles";

export const Card = ({
  name,
  age,
  size,
  description,
  local,
  image,
}: {
  name: string;
  age: string;
  size: string;
  description: string;
  local: {
    city: string;
    state: string;
  };
  image: string;
}) => {
  return (
    <CardContainer>
      <CardInnerContainer>
        <img src={image} alt={name} />
        <PetDetails>
          <div className="description">
            <h3>{name}</h3>
            <p>
              {age} <br />
              {size} <br />
              {description}
            </p>
          </div>
          <div className="local">
            <p>
              {local.city} ({`${local.state}`})
            </p>
            <a href="#">Falar com responsável</a>
          </div>
        </PetDetails>
      </CardInnerContainer>
    </CardContainer>
  );
};
