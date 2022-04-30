import styled from "styled-components";

export const DivImgCurvy = styled.div`
  position: absolute;
  max-width: 144rem;
  z-index: -1;
  top: 79rem;
  left: calc(50% - 72rem);

  @media (max-width: 900px) {
    top: 31rem;
  }
`;

export const ImgCurvy = styled.img`
  overflow-x: hidden;
  width: 100%;
  min-height: 45rem;
`;
