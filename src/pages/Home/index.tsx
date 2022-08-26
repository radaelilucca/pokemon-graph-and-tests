import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Pokedex } from "../../components";
import { AppDispatch, getRandomPokemon } from "../../state";

import { Container } from "./styles";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRandomPokemon());
  }, []);

  return (
    <Container>
      <Pokedex />
    </Container>
  );
};

export { HomePage };
