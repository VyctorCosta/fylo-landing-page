import styled from "styled-components";
import theme from "../../themes/main";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 72rem;
  margin: 0 auto;

  @media (max-width: 900px) {
    max-width: 26.8em;

    img {
      max-width: 32rem;
    }

    p {
      max-width: 37.5rem;
    }
  }
`;

export const Title = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.Colors.Neutral.white};
  font-size: 4.1rem;
  font-weight: ${({ theme }) => theme.Typography.Body.fontWeightBold};
  font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
  text-align: center;
  margin: 4rem 0;
  line-height: 5rem;

  @media (max-width: 900px) {
    font-size: 2.8rem;
  }
`;

export const Paragraph = styled.p`
  max-width: 64rem;
  color: ${({ theme }) => theme.Colors.Neutral.white};
  font-size: 2.1rem;
  font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
  font-weight: 500;
  text-align: center;
  line-height: 3rem;
  /* margin-bottom: 3rem; */

  @media (max-width: 900px) {
    font-size: 1.9rem;
    background-color: ${({ theme }) => theme.Colors.Primary.mainBackground};
  }
`;

export const Button = styled.button`
  min-width: 28rem;
  min-height: 5.2rem;
  color: ${({ theme }) => theme.Colors.Neutral.white};
  background-color: ${({ theme }) => theme.Colors.Accent.blue};
  font-size: 1.8rem;
  font-weight: 500;
  border: none;
  border-radius: 5rem;
  margin: 0 auto;

  :hover {
    background-color: ${({ theme }) => theme.Colors.Accent.cyan};
    cursor: pointer;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  background-color: ${({ theme }) => theme.Colors.Primary.mainBackground};

  @media (max-width: 900px) {
    width: 100vh;
    margin: 0;
    padding-top: 3rem;
  }
`;
