import styled from "styled-components";
import { colors } from "../../const";

export const Container = styled.div`
  background: #161526;
  width: 50vh;
  height: 55vh;

  border-radius: 1rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  padding-top: 2rem;

  position: relative;
`;

export const SearchBarContainer = styled.div`
  position: absolute;

  top: 1rem;
  left: 1rem;
  right: 1rem;

  z-index: 10;
`;

interface IFooterProps {
  hasErrors?: boolean;
}
export const Footer = styled.footer<IFooterProps>`
  bottom: 0;

  margin-top: auto;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding: 1rem;
  padding-top: 3.5rem;

  background: rgba(0, 0, 0, 0.2);

  strong {
    font-size: 2rem;

    margin-top: 0.5rem;
  }

  span {
    position: absolute;

    bottom: 1rem;
    right: 1rem;
  }

  span,
  strong {
    color: ${({ hasErrors }) => (hasErrors ? colors.error : "#2de4a1")};
  }

  & > button {
    background: #4e8ed3;
    border: none;
    width: 200px;
    margin-top: 1.5rem;
    height: 50px;
    border-radius: 0.5rem;

    font-size: 1.25rem;
    color: white;

    font-weight: 500;

    cursor: pointer;

    transition: background-color 150ms ease;

    &:hover {
      background-color: #195595;
    }
  }
`;
