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

export const TypesBackgroundsContainer = styled.div`
  position: absolute;

  height: 150%;
  width: 150%;

  z-index: 2;

  transform: rotate(135deg);
`;

interface ITypesBgProps {
  backgroundColor: string;
}

export const TypesBackground = styled.div<ITypesBgProps>`
  position: absolute;

  height: 200%;
  width: 200%;

  opacity: 1;
`;

export const FirstTypeBackground = styled(TypesBackground)`
  right: 49%;

  height: 200%;
  width: 200%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const SecondTypeBackground = styled(TypesBackground)`
  left: 49%;

  height: 100%;
  width: 100%;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;
