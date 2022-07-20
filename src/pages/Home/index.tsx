import React from "react";
import { Card } from "../../components/Card";
import { AvatarContainer, HomeContainer, PetList } from "./styles";

const PETS = [
  {
    id: 1,
    name: "Dunga",
    age: "2 anos",
    size: "Porte pequeno",
    description: "Calmo e educado",
    local: {
      city: "Rio de Janeiro",
      state: "RJ",
    },
    image: `/assets/pets/dunga.png`,
  },
  {
    id: 2,
    name: "Felícia",
    age: "3 meses",
    size: "Porte pequeno",
    description: "Ativa e carinhosa",
    local: {
      city: "Nova Iguaçu",
      state: "RJ",
    },
    image: `/assets/pets/felicia.png`,
  },
  {
    id: 3,
    name: "Sirius",
    age: "6 meses",
    size: "Porte grande",
    description: "Ativo e educado",
    local: {
      city: "Duque de Caxias",
      state: "RJ",
    },
    image: `/assets/pets/sirius.png`,
  },
  {
    id: 4,
    name: "Fiona",
    age: "3 anos",
    size: "Porte pequeno",
    description: "Calma e carinhosa",
    local: {
      city: "São Gonçalo",
      state: "RJ",
    },
    image: `/assets/pets/fiona.png`,
  },
  {
    id: 5,
    name: "Sid",
    age: "8 meses",
    size: "Porte médio/grande",
    description: "Brincalhão e amável",
    local: {
      city: "Rio de Janeiro",
      state: "RJ",
    },
    image: `/assets/pets/sid.png`,
  },
  {
    id: 6,
    name: "Yoda",
    age: "1 ano",
    size: "Porte médio",
    description: "Ativo e carinhoso",
    local: {
      city: "Nova Iguaçu",
      state: "RJ",
    },
    image: `/assets/pets/yoda.png`,
  },
  {
    id: 7,
    name: "Lua",
    age: "6 meses",
    size: "Porte médio",
    description: "Ativa e carinhosa",
    local: {
      city: "Duque de Caxias",
      state: "RJ",
    },
    image: `/assets/pets/lua.png`,
  },
  {
    id: 8,
    name: "Amora",
    age: "45 dias",
    size: "Porte grande",
    description: "Calma e carinhosa",
    local: {
      city: "São Gonçalo",
      state: "RJ",
    },
    image: `/assets/pets/amora.png`,
  },
  {
    id: 9,
    name: "Zelda",
    age: "5 meses",
    size: "Porte médio",
    description: "Ativa e amável",
    local: {
      city: "Rio de Janeiro",
      state: "RJ",
    },
    image: `/assets/pets/zelda.png`,
  },
];

export const Home = () => {
  return (
    <>
      <AvatarContainer>
        <strong>LA</strong>
      </AvatarContainer>
      <HomeContainer>
        <section>
          <h2>Olá! Veja os amigos disponíveis para adoção!</h2>
          <PetList>
            {PETS.map((pet) => (
              <Card />
            ))}
          </PetList>
        </section>
      </HomeContainer>
    </>
  );
};
