import styled from "styled-components";

export const Background = styled.footer`
  background-color: ${({ theme }) => theme.Colors.Primary.footerBackground};
  max-width: 144rem;
  margin: 0 auto;
  padding: 20rem 0 10rem 0;
`;

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
  color: ${({ theme }) => theme.Colors.Neutral.white};
  font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};

  .Logo {
    margin-bottom: 3rem;
  }

  @media (max-width: 900px) {
    max-width: 32rem;
    padding-left: 4rem;

    .Logo {
      padding-left: 1rem;
    }
  }
`;

export const DivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const Location = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 2rem;
  font-weight: 500;
  max-height: 6rem;

  img {
    max-height: 2rem;
  }
  p {
    max-width: 42rem;
  }

  @media (max-width: 900px) {
    max-height: 100%;
  }
`;

export const DivContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-height: 6rem;

  @media (max-width: 900px) {
    gap: 3rem;
  }
`;

export const Contact = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const DivChoices = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  max-width: 20rem;
  font-size: 1.6;
  font-weight: 500;
  gap: 2.2rem;

  p {
    cursor: pointer;
    user-select: none;
    :hover {
      font-weight: 700;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const DivIcons = styled.div`
  display: flex;
  max-width: 10rem;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;
