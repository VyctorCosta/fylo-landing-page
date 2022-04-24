import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes/main";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header";
import { DivImgCurvy, ImgCurvy } from "./styles";
import Intro from "../components/Intro";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <DivImgCurvy>
        <ImgCurvy src="img/bg-curvy-desktop.svg" />
      </DivImgCurvy>
      <Intro />
    </ThemeProvider>
  );
}

export default App;
