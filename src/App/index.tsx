import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes/main";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header";
import Intro from "../components/Intro";
import AboutUs from "../components/AboutUs";
import Illustration from "../components/Illustration";
import { DivImgCurvy, ImgCurvy } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <DivImgCurvy>
        <ImgCurvy src="img/bg-curvy-desktop.svg" />
      </DivImgCurvy>
      <Intro />
      <AboutUs />
      <Illustration />
    </ThemeProvider>
  );
}

export default App;
