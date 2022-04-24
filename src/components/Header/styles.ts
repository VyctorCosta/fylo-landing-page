import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10rem;
  font-family: ${({ theme }) => theme.Typography.Headings.fontFamily};
  margin: 5rem;
  /* background-color: red; */

  .Logo {
    width: 17.6rem;
    height: 5.2rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 3rem;
`;

export const Text = styled.h2`
  color: ${({ theme }) => theme.Colors.Neutral.white};
  :hover {
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
    transform: scale(1.1);
  }
`;
