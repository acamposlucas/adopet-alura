import React from "react";
import { CardContainer, CardInnerContainer, PetDetails } from "./styles";

export const Card = () => {
  return (
    <CardContainer>
      <CardInnerContainer>
        <img src="src\assets\pets\dunga.png" alt="dunga" />
        <PetDetails>
          <div className="description">
            <h3>Dunga</h3>
            <p>
              2 anos <br />
              Porte pequeno <br />
              Calmo e educado
            </p>
          </div>
          <div className="local">
            <p>Rio de Janeiro (RJ)</p>
            <a href="#">Falar com responsável</a>
          </div>
        </PetDetails>
      </CardInnerContainer>
    </CardContainer>
  );
};
