import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { Cadastro } from "./pages/Cadastro";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
