import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.Colors.Primary.initialBackground};
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 144rem;
  font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
  margin: 0 auto;
  padding: 5rem 5rem;

  .Logo {
    width: 17.6rem;
    height: 5.2rem;
  }

  @media (max-width: 900px) {
    max-width: 37.5rem;
    align-items: center;
    padding: 5rem 1.5rem;

    .Logo {
      width: 10rem;
      height: 3rem;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 7rem;

  @media (max-width: 900px) {
    gap: 2rem;
  }
`;

export const Text = styled.h2`
  color: ${({ theme }) => theme.Colors.Neutral.white};
  font-family: ${({ theme }) => theme.Typography.Body.fontFamily};
  font-size: 1.6rem;
  :hover {
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
`;
