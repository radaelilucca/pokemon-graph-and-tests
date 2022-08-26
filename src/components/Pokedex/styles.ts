import styled from "styled-components";

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

export const PokedexFooter = styled.footer`
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 40%;
  width: 100%;

  padding: 1rem;

  background: rgba(0, 0, 0, 0.2);

  strong {
    font-size: 2rem;
    color: #2de4a1;
  }

  span {
    position: absolute;
    color: #2de4a1;
    bottom: 1rem;
    right: 1rem;
  }

  button {
    background: #4e8ed3;
    border: none;
    width: 200px;
    margin-top: auto;
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
