import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.Colors.Primary.mainBackground};
  width: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  gap: 4rem;
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 8rem;
  padding-bottom: 10rem;
  background-color: ${({ theme }) => theme.Colors.Primary.mainBackground};
  color: ${({ theme }) => theme.Colors.Neutral.white};

  @media (max-width: 900px) {
    max-width: 37.5rem;
    padding: 0 4rem;
  }
`;
