import { ThemeProvider } from "styled-components";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
