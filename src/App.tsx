import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { Cadastro } from "./pages/Cadastro";
import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { SecondLayerLayout } from "./components/Layouts/SecondLayerLayout";
import { Mensagem } from "./pages/Mensagem";

function App() {
  const [backgroundColor, setbackgroundColor] = useState<string>("#3772FF");
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setbackgroundColor("#3772FF");
    } else {
      setbackgroundColor("#fff");
    }
  }, [location]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route element={<DefaultLayout backgroundColor={backgroundColor} />}>
          <Route element={<SecondLayerLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/mensagem" element={<Mensagem />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
