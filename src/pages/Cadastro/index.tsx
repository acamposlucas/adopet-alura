import { useState } from "react";
import Logo from "../../components/Logo";
import { colors } from "../../styles/constants";
import { LogoWrapper } from "../../styles/helpers";
import { Eye, EyeSlash } from "phosphor-react";
import {
  CadastroContainer,
  FormContainer,
  InputContainer,
  SubscribeButton,
} from "./styles";
import { Button } from "../../styles/components/Button";
import {
  SecondaryFormContainer,
  SecondaryInput,
  SecondaryLabel,
} from "../../styles/components/SecondaryForm";

export const Cadastro = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState<boolean>(false);

  const handleTogglePasswordVisibility = (inputID: string) => {
    return (event: React.MouseEvent) => {
      inputID === "password"
        ? setIsPasswordVisible(!isPasswordVisible)
        : setIsPasswordConfirmationVisible(!isPasswordConfirmationVisible);
      event.preventDefault();
    };
  };

  return (
    <CadastroContainer>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 598 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
      >
        <path
          d="M198.83 6.8h11.66V103a10.468 10.468 0 01-3.13 7.57 10.101 10.101 0 01-7.49 3.2h-10.63v-6.12a41.708 41.708 0 01-21.4 6 41.065 41.065 0 01-30.13-12.52 42.544 42.544 0 01-12.52-30.19 42.617 42.617 0 0112.501-30.131A42.615 42.615 0 01167.84 28.35a42.532 42.532 0 0121.4 5.82V16.4a9.6 9.6 0 019.59-9.6zm-9.59 64.78v-1.31a20.594 20.594 0 00-3.06-10.41 21.527 21.527 0 00-7.71-7.49 21.681 21.681 0 00-21.33.07 21.471 21.471 0 00-7.79 7.79 21.31 21.31 0 003.35 25.84 21.259 21.259 0 0030.06.21 20.928 20.928 0 006.48-14.7zM232 40.87a42.79 42.79 0 0160.41-.08A41.001 41.001 0 01305 70.93a41.174 41.174 0 01-12.52 30.2 42.714 42.714 0 01-13.857 9.265 42.718 42.718 0 01-32.696 0 42.703 42.703 0 01-13.857-9.265 41.146 41.146 0 01-9.39-13.803 41.142 41.142 0 01-3.13-16.397A40.668 40.668 0 01232 40.87zm15.13 45.27a21.188 21.188 0 0030.14-.07 20.795 20.795 0 006.26-15.14 21.332 21.332 0 00-36.243-14.783 21.327 21.327 0 00-6.407 14.783 20.996 20.996 0 006.29 15.21h-.04zM399.15 62.27a41.66 41.66 0 01-.51 19.43 42.632 42.632 0 01-8.37 16.52 43.15 43.15 0 01-14.48 11.21 41.779 41.779 0 01-39.79-1.75v16.74a10.43 10.43 0 01-3.13 7.57 10.25 10.25 0 01-7.64 3.21h-10.51v-107H336v6a40.793 40.793 0 0134.5-3.78 42.182 42.182 0 0118.71 12.08 40.461 40.461 0 019.94 19.77zm-56.92 23.87a21.442 21.442 0 0032.934-3.32 21.401 21.401 0 10-39.194-11.89 20.99 20.99 0 006.26 15.21zM550.25 82.21h21.11a31.743 31.743 0 01-4.22 16.08 30.7 30.7 0 01-11.65 11.58 31.908 31.908 0 01-16 4.22 32.412 32.412 0 01-10.63-1.75 31.814 31.814 0 01-21.26-30.13v-75h10.48a10.49 10.49 0 015.39 1.46 10.999 10.999 0 013.93 3.93 10.511 10.511 0 011.45 5.4v10.93h42.51V50h-42.51v34.39a10.811 10.811 0 0018.615 5.073 10.807 10.807 0 002.785-7.253zM90.69 28.2v6a42.5 42.5 0 00-21.4-5.82 41.212 41.212 0 00-30.13 12.41 40.93 40.93 0 00-12.52 30.14 41.129 41.129 0 0012.52 30.2 41.038 41.038 0 0030.13 12.52 42.004 42.004 0 0022.27-6.4 11.622 11.622 0 003.93 4.58 10 10 0 005.83 1.82H112V28.2H90.69zM76.93 58.27c.52-3.61 3.4-6 6.43-5.24 3.03.76 5.06 4.2 4.54 7.8-.52 3.6-3.4 6-6.43 5.24-3.03-.76-5.06-4.2-4.54-7.8zM64.62 46.1c2.72-1.84 6.44-.62 8.31 2.72 1.87 3.34 1.19 7.56-1.53 9.4-2.72 1.84-6.43.63-8.3-2.72-1.87-3.35-1.19-7.5 1.52-9.4zm-13.91 6c2.72-1.84 6.44-.63 8.31 2.72s1.19 7.56-1.53 9.4c-2.72 1.84-6.43.63-8.3-2.72-1.87-3.35-1.19-7.5 1.52-9.36v-.04zm3.73 25.67c-1.55 2.7-5.23 3.2-8.22 1.12s-4.15-6-2.6-8.65c1.55-2.65 5.23-3.2 8.22-1.12s4.16 5.99 2.6 8.69v-.04zm33.38 7c-3.76 2.88-9.28-.44-13.84 1.5-4.62 1.77-6.3 8-11 8.53-4.7.53-8.3-4.58-4-13.88 2.8-6.26 2.02-11.62 7.19-13.86 5.27-2 8.44 2.43 14.93 5 9.53 3.7 10.48 9.88 6.72 12.75v-.04zM471.5 82.85a20.508 20.508 0 01-9.39 8.4 20.86 20.86 0 01-12.55 1.55 21.72 21.72 0 01-11.07-5.49l56.07-25.11-.66-2.9a7.745 7.745 0 00-.39-1.58 25.678 25.678 0 00-1.28-3.57 39 39 0 00-7-10.73 40.73 40.73 0 00-22.72-13.51 41.56 41.56 0 00-26.61 2.75A42.548 42.548 0 00412.49 59a43.168 43.168 0 00-1.56 17.69 41.816 41.816 0 007.64 19.54 42.402 42.402 0 0068.35 1.45 43.124 43.124 0 007.29-14.83H471.5zM436.38 58a20.564 20.564 0 018-6.21 21.002 21.002 0 0110-1.86 22.66 22.66 0 019.62 2.82L432.12 67a22.655 22.655 0 014.26-9z"
          fill="#3772FF"
        />
      </svg>
      <section>
        <h2>Ainda não tem cadastro?</h2>
        <p>
          Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </p>
      </section>
      <SecondaryFormContainer>
        <SecondaryLabel htmlFor="email">
          Email
          <SecondaryInput id="email" placeholder="Escolha seu melhor email" />
        </SecondaryLabel>
        <SecondaryLabel htmlFor="name">
          Nome
          <SecondaryInput id="name" placeholder="Digite seu nome completo" />
        </SecondaryLabel>
        <SecondaryLabel htmlFor="password">
          Senha
          <SecondaryInput
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            placeholder="Crie uma senha"
          />
          <span
            onClick={handleTogglePasswordVisibility("password")}
            role="button"
            aria-label="altera visibilidade da senha"
          >
            {isPasswordVisible ? (
              <EyeSlash size={16} color="#999" />
            ) : (
              <Eye size={16} color="#999" />
            )}
          </span>
        </SecondaryLabel>
        <SecondaryLabel htmlFor="passwordConfirmation">
          Confirme sua senha
          <SecondaryInput
            type={isPasswordConfirmationVisible ? "text" : "password"}
            id="passwordConfirmation"
            placeholder="Confirme sua senha"
          />
          <span
            onClick={handleTogglePasswordVisibility("passwordConfirmation")}
            role="button"
            aria-label="altera visibilidade da senha"
          >
            {isPasswordConfirmationVisible ? (
              <EyeSlash size={16} color="#999" />
            ) : (
              <Eye size={16} color="#999" />
            )}
          </span>
        </SecondaryLabel>

        <Button type="submit">Cadastrar</Button>
      </SecondaryFormContainer>
    </CadastroContainer>
  );
};
