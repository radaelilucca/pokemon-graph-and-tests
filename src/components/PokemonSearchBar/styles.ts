import styled from "styled-components";

interface IContainerProps {
  isInputOpen?: boolean;
  error?: boolean;
}

export const Container = styled.form<IContainerProps>`
  --green: #2de4a1;
  --error-red: #ff426e;

  --accent-color: ${({ error }) =>
    error ? "var(--error-red)" : "var(--green)"};

  display: flex;
  align-items: center;

  position: relative;

  height: 2.5rem;
  min-width: 2.5rem;

  width: ${({ isInputOpen }) => (isInputOpen ? "100%" : "2.5rem")};

  background: transparent;

  overflow: hidden;

  border: 1px solid var(--accent-color);

  border-radius: 0.5rem;

  transition: all 200ms ease-in;

  animation: ${({ error }) =>
    error ? "search-bar-error-animation 200ms ease" : "none"};

  @keyframes search-bar-error-animation {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

interface InputProps {
  isOpen?: boolean;
  error?: boolean;
}

export const Input = styled.input<InputProps>`
  all: unset;

  background: rgba(18, 17, 30, 0.8);

  height: 100%;

  transition: all 200ms ease-in;

  width: ${({ isOpen }) => (isOpen ? "100%" : "0")};

  padding: ${({ isOpen }) => (isOpen ? "0.8rem" : "0px")};

  color: ${({ error }) => (error ? "var(--error-red)" : "var(--accent-color)")};

  &::placeholder {
    color: #fff;
    opacity: 0.4;
    font-weight: 300;
  }
`;

export const Button = styled.button`
  height: 2.5rem;
  width: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #12111e;

  border: none;

  z-index: 20;

  transition: all 50ms ease;

  cursor: pointer;

  svg {
    height: 1.2rem;
    width: 1.2rem;

    transition: all 300ms ease;

    path {
      stroke: var(--accent-color);
      fill: var(--accent-color);
    }
  }

  &:hover {
    background: rgba(18, 17, 30, 1);
    svg {
      transform: scale(1.15);
    }
  }

  &:active,
  &:focus {
    outline: none;
  }
`;
