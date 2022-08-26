import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  overflow: hidden;

  border-radius: 50%;

  background-color: white;

  border: 2px solid #2de4a1;

  img {
    z-index: 3;
    height: 220px;
    width: 220px;
    padding: 1.2rem;
  }
`;

interface ITypesBgProps {
  backgroundColors: string[];
}

export const TypesBackground = styled.div<ITypesBgProps>`
  position: absolute;

  z-index: 2;

  height: 100%;
  width: 100%;

  transform: rotate(135deg);

  opacity: 1;

  &:after {
    position: absolute;
    content: "";
    height: 200%;
    width: 200%;
    background-color: ${({ backgroundColors }) =>
      backgroundColors.length === 1 ? backgroundColors : backgroundColors[0]};

    bottom: 49%;
  }

  &:before {
    position: absolute;
    content: "";
    height: 200%;
    width: 200%;
    background-color: ${({ backgroundColors }) =>
      backgroundColors.length === 1 ? backgroundColors : backgroundColors[1]};

    top: 49%;
  }
`;
