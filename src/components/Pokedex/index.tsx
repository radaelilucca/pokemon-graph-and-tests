import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, getRandomPokemon, RootState } from "../../state";
import { Loading } from "../Loading";
import { PokemonFrame } from "../PokemonFrame";
import { Container, PokedexFooter } from "./styles";

const Pokedex = () => {
  const { pokemon, isLoading } = useSelector(
    (state: RootState) => state.pokemonState
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container>
      <Loading />
      <PokemonFrame
        isLoading={isLoading}
        id={pokemon.id}
        types={pokemon.types}
      />

      <PokedexFooter>
        <strong>{pokemon.name}</strong>
        <span>#{pokemon.id}</span>

        <button onClick={() => dispatch(getRandomPokemon())}>Random</button>
      </PokedexFooter>
    </Container>
  );
};

export { Pokedex };
