import styled from "styled-components";

export const Background = styled.div`
  @media (max-width: 900px) {
    width: 100%;
    background-color: ${({ theme }) => theme.Colors.Primary.mainBackground};
  }
`;

export const Container = styled.div`
  max-width: 144rem;
  display: flex;
  align-items: center;
  gap: 5rem;
  margin: 0 auto;
  padding: 14rem 4rem;
  background-color: ${({ theme }) => theme.Colors.Primary.mainBackground};

  @media (max-width: 900px) {
    gap: 2rem;
    max-width: 37.5rem;
    flex-direction: column;
    padding-bottom: 10rem;
  }
`;

export const IllustrationImg = styled.img`
  width: auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  color: ${({ theme }) => theme.Colors.Neutral.white};

  p {
    font-size: 1.6rem;
    line-height: 2.5rem;
    font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
  }

  @media (max-width: 900px) {
    justify-content: flex-start;
    gap: 1rem;
    padding-bottom: 0;
    p {
      font-size: 1.4rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
  max-width: 46rem;
  line-height: 5.5rem;

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`;

export const Link = styled.h2`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ theme }) => theme.Colors.Accent.blue};
  max-width: 15.3rem;
  font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
  border-bottom: 0.1rem solid ${({ theme }) => theme.Colors.Accent.blue};
  padding-bottom: 0.5rem;
  user-select: none;

  :hover {
    color: ${({ theme }) => theme.Colors.Neutral.white};
    border-color: ${({ theme }) => theme.Colors.Neutral.white};

    img {
      filter: sepia(100%);
    }
  }

  @media (max-width: 900px) {
  }
`;
