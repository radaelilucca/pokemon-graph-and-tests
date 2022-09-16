import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Pokedex } from "../../components";
import { AppDispatch, getPokemon } from "../../state";

import { Container } from "./styles";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPokemon({}));
  }, []);

  return (
    <Container>
      <Pokedex />
    </Container>
  );
};

export { HomePage };
