import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.Colors.Primary.initialBackground};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 72rem;
  margin: 0 auto;
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
`;

export const Paragraph = styled.p`
  max-width: 64rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.Colors.Neutral.white};
  font-size: 2.1rem;
  font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
  font-weight: 500;
  text-align: center;
  line-height: 3rem;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  min-width: 28rem;
  min-height: 5.2rem;
  color: ${({ theme }) => theme.Colors.Neutral.white};
  background-color: ${({ theme }) => theme.Colors.Accent.blue};
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 auto;
  border: none;
  border-radius: 5rem;

  :hover {
    background-color: ${({ theme }) => theme.Colors.Accent.cyan};
    cursor: pointer;
  }
`;
