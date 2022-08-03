import { Button } from "../../styles/components/Button";
import {
  SecondaryInput,
  SecondaryLabel,
} from "../../styles/components/SecondaryForm";
import { AdminFormContainer, AdminContainer } from "./styles";
import { useForm } from "react-hook-form";

export const Admin = () => {
  return (
    <AdminContainer>
      <AdminFormContainer>
        <SecondaryLabel htmlFor="petName">
          Nome
          <SecondaryInput type="text" name="petName" id="petName" required />
        </SecondaryLabel>
        <SecondaryLabel htmlFor="petAge">
          Idade
          <SecondaryInput type="text" name="petAge" id="petAge" required />
        </SecondaryLabel>
        <SecondaryLabel htmlFor="petSize">
          Tamanho
          <select id="petSize" name="petSize" required>
            <option defaultChecked value="Porte pequeno">
              Porte pequeno
            </option>
            <option value="Porte pequeno/médio">Porte pequeno/médio</option>
            <option value="Porte médio">Porte médio</option>
            <option value="Porte médio/grande">Porte médio/grande</option>
            <option value="Porte grande">Porte grande</option>
          </select>
        </SecondaryLabel>

        <SecondaryLabel htmlFor="petLocality">
          Local
          <SecondaryInput
            id="petLocality"
            name="petLocality"
            placeholder="Cidade (Estado)"
            type="text"
            required
          />
        </SecondaryLabel>
        <SecondaryLabel htmlFor="petImage">
          Foto
          <SecondaryInput type="text" name="petImage" id="petImage" required />
        </SecondaryLabel>
        <SecondaryLabel htmlFor="petBehavior">
          Comportamento
          <textarea
            id="petBehavior"
            name="petBehavior"
            placeholder="Descreva sucintamente o comportamento do animal"
            required
          />
        </SecondaryLabel>
        <Button type="submit">Cadastrar</Button>
      </AdminFormContainer>
    </AdminContainer>
  );
};
