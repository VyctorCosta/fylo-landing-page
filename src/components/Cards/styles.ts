import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 4rem;
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 8rem;
  padding-bottom: 25rem;
  background-color: ${({ theme }) => theme.Colors.Primary.mainBackground};
  color: ${({ theme }) => theme.Colors.Neutral.white};
`;
