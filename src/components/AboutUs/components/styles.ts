import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.Colors.Neutral.white};

  img {
    width: 7rem;
    height: 8.2rem;
  }

  h3 {
    margin: 2rem 0 1.5rem 0;
    font-size: 1.7rem;
    font-weight: ${({ theme }) => theme.Typography.Headings.fontWeightBold};
    font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
  }

  p {
    text-align: center;
    font-size: 1.3rem;
    font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
    font-weight: 500;
  }
`;
