import React, { useState } from "react";
import { Background, Container, DivEmail, DivInput } from "./styles";
import isEmail from "validator/lib/isEmail";

const Contact: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Background>
      <Container>
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you
          have any questions, our support team would be happy to help you.
        </p>
        <DivEmail>
          <DivInput>
            <input
              placeholder="email@example.com"
              onChange={({ target }) => {
                setInputValue(target.value);
              }}
            />
          </DivInput>
          <button
            onClick={() => {
              if (isEmail(inputValue)) {
                console.log("Email");
              } else {
                console.log("Not email");
              }
            }}
          >
            Get Started For Free
          </button>
        </DivEmail>
      </Container>
    </Background>
  );
};

export default Contact;
