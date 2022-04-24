import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes/main";

function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
