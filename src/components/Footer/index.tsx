import React from "react";
import {
  Background,
  Container,
  Contact,
  DivChoices,
  DivIcons,
  DivInfo,
  DivContact,
  Location,
} from "./styles";
import { LogoFacebook, LogoInstagram, LogoTwitter } from "react-ionicons";

const Footer: React.FC = () => {
  return (
    <Background>
      <Container>
        <img src="img/logo.svg" alt="Logo da Fylo" className="Logo" />
        <DivInfo>
          <Location>
            <img src="img/icon-location.svg" alt="Ícone de localização" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </p>
          </Location>
          <DivContact>
            <Contact>
              <img src="img/icon-phone.svg" alt="Ícone de um telefone" />
              <p>+1-543-123-4567</p>
            </Contact>
            <Contact>
              <img src="img/icon-email.svg" alt="Ícone de um email" />
              <p>example@fylo.com</p>
            </Contact>
          </DivContact>
          <DivChoices>
            <p>About us</p>
            <p>Contact us</p>
            <p>Jobs</p>
            <p>Terms</p>
            <p>Press</p>
            <p>Privacy</p>
            <p>Blog</p>
          </DivChoices>
          <DivIcons>
            <LogoFacebook color={"#FFFFFF"} />
            <LogoTwitter color={"#FFFFFF"} />
            <LogoInstagram color={"#FFFFFF"} />
          </DivIcons>
        </DivInfo>
      </Container>
    </Background>
  );
};

export default Footer;
