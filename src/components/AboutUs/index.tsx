import React from "react";
import { Container, DivInfos } from "./styles";
import Info from "./components/Info";

export default function AboutUs() {
  return (
    <Container>
      <DivInfos>
        <Info
          logoSrc="img/icon-access-anywhere.svg"
          altImg="Logo de um tela de computador."
          title="Access your files, anywhere"
          text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        />
        <Info
          logoSrc="img/icon-security.svg"
          altImg="Logo de segurança."
          title="Security you can trust"
          text="2-factor authentication and user-controlled encryption are Just a couple of the security features we allow to help secure your files"
        />
        <Info
          logoSrc="img/icon-collaboration.svg"
          altImg="Ícone de pessoas colaborando entre sí."
          title="Real-time collaboration"
          text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        />
        <Info
          logoSrc="img/icon-any-file.svg"
          altImg="Ícone de pasta e armazenamento."
          title="Store any type of file"
          text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        />
      </DivInfos>
    </Container>
  );
}
