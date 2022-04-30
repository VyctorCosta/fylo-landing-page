import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  max-width: 144rem;
  background-color: ${({ theme }) => theme.Colors.Primary.mainBackground};
  margin: 0 auto;
  padding: 0 20%;

  @media (max-width: 900px) {
    width: 100%;
    padding: 0 10%;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 70rem;
  gap: 3rem;
  background-color: ${({ theme }) => theme.Colors.Primary.emailBackground};
  color: ${({ theme }) => theme.Colors.Neutral.white};
  font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
  padding: 4.5rem 3rem;
  box-shadow: 0.5rem 0.6rem 0.5rem 0 rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  position: relative;
  top: 12rem;

  h2 {
    font-size: 3rem;
    font-weight: 700;
  }

  p {
    font-size: 1.4rem;
    max-width: 60rem;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 900px) {
    max-width: 29.5rem;
    min-width: 0;

    h2 {
      text-align: center;
    }

    p {
      line-height: 2rem;
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  min-width: 66.6%;
  min-height: 5rem;
  border-radius: 5rem;
  padding-left: 4rem;
  background-color: ${({ theme }) => theme.Colors.Neutral.white};

  input {
    border: none;
    outline: none;
    width: 90%;

    ::placeholder {
      color: hsl(232, 10%, 61%);
    }
  }

  @media (max-width: 900px) {
    padding-left: 2rem;
    input {
      font-size: 1.2rem;
    }
  }
`;

export const DivEmail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 70rem;
  gap: 4rem;

  button {
    font-size: 1.6rem;
    font-weight: 500;
    background-color: ${({ theme }) => theme.Colors.Accent.blue};
    border: none;
    border-radius: 5rem;
    cursor: pointer;
    width: 100%;
    max-width: 30rem;
    color: ${({ theme }) => theme.Colors.Neutral.white};

    :hover {
      background-color: ${({ theme }) => theme.Colors.Accent.cyan};
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    button {
      min-height: 5rem;
    }
  }
`;
