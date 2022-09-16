import styled from "styled-components";

interface IContainerProps {
  hasErrors?: boolean;
}
export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  overflow: hidden;

  border-radius: 50%;

  background-color: white;

  img {
    z-index: 3;
    height: 240px;
    width: 240px;
    padding: 2.2rem;

    animation: ${({ hasErrors }) =>
      hasErrors ? "none" : "float 3000ms ease-out infinite"};

    @keyframes float {
      0% {
        transform: none;
      }

      50% {
        transform: translateY(-1.05rem);
      }

      100% {
        transform: none;
      }
    }
  }
`;

export const TypesBackgroundsContainer = styled.div`
  position: absolute;

  height: 150%;
  width: 150%;

  z-index: 2;

  animation: spin 2500ms ease-in-out infinite forwards;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
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

export const DarkBackground = styled.div`
  background: #12111e;

  position: absolute;
  height: 92%;
  width: 92%;

  z-index: 2;

  border-radius: 50%;
`;
