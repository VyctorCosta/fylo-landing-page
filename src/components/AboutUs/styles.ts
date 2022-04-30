import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.Primary.mainBackground};
  max-width: 144rem;
  margin: 0 auto;
  margin-top: 20rem;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;

export const DivInfos = styled.div`
  max-width: 84rem;
  min-height: 40rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 15rem;
  margin: 0 auto;
  padding: 0 2.5rem;

  @media (max-width: 900px) {
    max-width: 37.5rem;
    margin: 0;
    padding-top: 14rem;
  }
`;
