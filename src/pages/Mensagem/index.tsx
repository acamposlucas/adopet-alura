import React from "react";
import {
  Fieldset,
  FormContainer,
  Input,
  Label,
  Legend,
  Textarea,
} from "../../styles/components/Form";
import { MensagemContainer } from "./styles";

export const Mensagem = () => {
  return (
    <MensagemContainer>
      <h1>
        Envie uma mensagem para a pessoa ou instituição que está cuidando do
        animal:
      </h1>
      <FormContainer>
        <Label htmlFor="name">
          Nome
          <Input type="text" placeholder="Insira seu nome completo" id="name" />
        </Label>
        <Label htmlFor="telephone">
          Telefone
          <Input
            type="text"
            placeholder="Insira seu telefone e/ou whatsapp"
            id="telephone"
          />
        </Label>
        <Label htmlFor="pet-name">
          Nome do animal
          <Input
            id="pet-name"
            type="text"
            placeholder="Por qual animal você se interessou?"
          />
        </Label>
        <Label htmlFor="message">
          Mensagem
          <Textarea id="message" placeholder="Escreva sua mensagem" rows={8} />
        </Label>
      </FormContainer>
    </MensagemContainer>
  );
};
