import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { colors } from "../../const";
import { AppDispatch, getPokemon, RootState } from "../../state";
import { Loading } from "../Loading";
import { PokemonFrame } from "../PokemonFrame";
import { PokemonSearchBar } from "../PokemonSearchBar";
import { Container, Footer, SearchBarContainer } from "./styles";

const Pokedex = () => {
  const { pokemon, isLoading, error } = useSelector(
    (state: RootState) => state.pokemonState
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container>
      <Loading />
      <PokemonFrame
        isLoading={isLoading}
        hasErrors={!!error}
        id={pokemon.id}
        types={pokemon.types}
      />

      <Footer hasErrors={!!error}>
        <SearchBarContainer>
          <PokemonSearchBar />
        </SearchBarContainer>

        <strong style={{ color: error && colors.error }}>
          {error ? "not found" : pokemon.name}
        </strong>
        <span>#{error ? "error" : pokemon.id}</span>

        <button onClick={() => dispatch(getPokemon({}))}>Random</button>
      </Footer>
    </Container>
  );
};

export { Pokedex };
