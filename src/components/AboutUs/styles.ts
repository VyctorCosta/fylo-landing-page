import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.Colors.Primary.mainBackground};
  max-width: 144rem;
  margin: 0 auto;
  margin-top: 20rem;
`;

export const DivInfos = styled.div`
  max-width: 84rem;
  min-height: 40rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15rem;
  margin: 0 auto;
  padding: 0 2.5rem;
`;
