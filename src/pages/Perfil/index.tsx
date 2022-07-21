import React from "react";
import {
  Fieldset,
  FormButton,
  FormContainer,
  Input,
  Label,
  Legend,
  ProfileAvatar,
  Textarea,
} from "../../styles/components/Form";
import { Title } from "../../styles/helpers";
import { ProfileContainer } from "./styles";

export const Profile = () => {
  return (
    <ProfileContainer>
      <Title>
        Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua
        mensagem.
      </Title>
      <FormContainer>
        <Fieldset>
          <Legend>Perfil</Legend>
          <Label htmlFor="avatar">
            Foto
            <Input id="avatar" name="avatar" type="file" />
            <ProfileAvatar src="src\assets\defaultProfile.png" />
            <span>Clique na foto para editar</span>
          </Label>
          <Label>
            Nome
            <Input type="text" />
          </Label>
          <Label>
            Telefone
            <Input />
          </Label>
          <Label>
            Cidade
            <Input type="text" />
          </Label>
          <Label>
            Sobre
            <Textarea />
          </Label>
        </Fieldset>
        <FormButton type="submit">Salvar</FormButton>
      </FormContainer>
    </ProfileContainer>
  );
};
