import React from "react";
import { Background, Container } from "./styles";
import Card from "./components/Card";

const Cards: React.FC = () => {
  return (
    <Background>
      <Container>
        <Card
          imgSrc="img/profile-2.png"
          altImg="Foto de perfil"
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Rogério Júnior"
          role="Founder & CEO, Huddle"
        />
        <Card
          imgSrc="img/profile-1.png"
          altImg="Foto de perfil"
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Vyctor Costa"
          role="Founder & CEO, Huddle"
        />
        <Card
          imgSrc="img/profile-3.png"
          altImg="Foto de perfil"
          text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          name="Arthur Vinícius"
          role="Founder & CEO, Huddle"
        />
      </Container>
    </Background>
  );
};

export default Cards;
