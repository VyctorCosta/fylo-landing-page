import React from "react";
import { Container } from "./styles";

interface Props {
  logoSrc: string;
  altImg: string;
  title: string;
  text: string;
}

const Info: React.FC<Props> = ({ logoSrc, altImg, title, text }) => {
  return (
    <Container>
      <img src={logoSrc} alt={altImg} className="logo" />
      <h3>{title}</h3>
      <p>{text}</p>
    </Container>
  );
};

export default Info;
