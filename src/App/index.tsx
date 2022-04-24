import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes/main";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header";
import { Container } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
