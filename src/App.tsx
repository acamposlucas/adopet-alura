import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { Cadastro } from "./pages/Cadastro";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

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
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
