import React from "react";
import { Container, Menu, Text } from "./styles";

export default function Header() {
  return (
    <Container>
      <img src="img/logo.svg" alt="Imagem da Logo Fylo" className="Logo" />
      <Menu>
        <Text>Features</Text>
        <Text>Team</Text>
        <Text>Sign In</Text>
      </Menu>
    </Container>
  );
}
