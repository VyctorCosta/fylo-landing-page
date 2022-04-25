import React from "react";
import { Container, DivPerson, DivName } from "./styles";

interface Props {
  imgSrc: string;
  altImg: string;
  text: string;
  name: string;
  role: string;
}

const Card: React.FC<Props> = ({ imgSrc, altImg, text, name, role }) => {
  return (
    <Container>
      <h3>{text}</h3>
      <DivPerson>
        <img src={imgSrc} alt={altImg} />
        <DivName>
          <p className="name">{name}</p>
          <p className="role">{role}</p>
        </DivName>
      </DivPerson>
    </Container>
  );
};

export default Card;
