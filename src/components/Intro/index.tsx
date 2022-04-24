import React from "react";
import { Container, Title, Paragraph, Button } from "./styles";

export default function Intro() {
  return (
    <Container>
      <img
        src="img/illustration-intro.png"
        alt="Foto de ilustração da intro"
        className="img-intro"
      />
      <Title>All your files in one secure location, accessible anywhere.</Title>
      <Paragraph>
        Fylo stores all your most important files in one secure location.
        <br />
        Access them wherever you need, share and collaborate with friend family, and co-workers
      </Paragraph>
      <Button>Get Started</Button>
    </Container>
  );
}
