import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  background-color: ${({ theme }) => theme.Colors.Primary.testimonialsBackground};
  max-width: 40rem;
  padding: 4rem 3rem;
  border-radius: 1.2rem;
  font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
  margin: 0 auto;
  box-shadow: 0.5rem 0.5rem 0.5rem 0 rgba(15, 15, 15, 0.326);

  h3 {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  @media (max-width: 900px) {
    max-width: 29.5rem;
    margin: 0;

    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const DivPerson = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 5rem;
  }
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .name {
    font-weight: 700;
  }
  .role {
    font-size: 1.1rem;
  }
`;

interface Props {
  display: string;
}

export const DivImgQuotes = styled.div<Props>`
  display: ${(props) => props.display};
  /* max-width: 144rem; */
  position: relative;
  z-index: 0;
  top: -7rem;
  left: -4rem;
`;

export const ImgQuotes = styled.img`
  position: relative;
  /* width: 100%; */
`;
