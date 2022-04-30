import React from "react";
import { Background, Container, IllustrationImg, DivContent, Link, Title } from "./styles";

const Illustration: React.FC = () => {
  return (
    <Background>
      <Container>
        <IllustrationImg
          src="img/illustration-stay-productive.png"
          alt="Imagem ilustrativa de pessoas produzindo."
        />
        <DivContent>
          <Title>Stay productive, wherever you are</Title>
          <p>
            Never let location be an issue when accessing your files. Fylo has you covered for all
            of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues for live
            collaboration. No email attachment required.
          </p>
          <Link>
            See how Fylo works
            <img src="img/icon-arrow.svg" alt="Ícone de uma seta apontando para a direita" />
          </Link>
        </DivContent>
      </Container>
    </Background>
  );
};

export default Illustration;
