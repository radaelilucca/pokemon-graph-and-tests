import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  height: 100%;
  width: 100%;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 100;

  background: rgba(0, 0, 0, 0.95);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 35%;
    width: 35%;

    margin-bottom: 1rem;
  }

  span {
    color: #ffffff;
    font-size: 1.6rem;

    opacity: 1;

    animation: blinkText 800ms ease-out infinite forwards;

    @keyframes blinkText {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }
`;
