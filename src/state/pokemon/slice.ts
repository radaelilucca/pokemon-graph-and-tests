import { gql } from "@apollo/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apolloClient } from "../../services/apollo";
import { getRandomIntInRange } from "../../utils";
import { PokemonDetailsType, PokemonDTOType, PokemonStateType } from "./types";

const POKEMON_REDUCER_NAME = "pokemon";

const getPokemonByIdQuery = gql`
  query getPokemonById($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

const getRandomPokemon = createAsyncThunk(
  `${POKEMON_REDUCER_NAME}/getRandomPokemon`,
  async () => {
    const firstPokemonId = 1;
    const lastPokemonId = 905;

    const randomId = getRandomIntInRange({
      min: firstPokemonId,
      max: lastPokemonId,
    });

    const response = await apolloClient.query({
      query: getPokemonByIdQuery,
      variables: {
        id: randomId,
      },
    });

    const { pokemon_v2_pokemon_by_pk } = response.data;

    const pokemonData = pokemon_v2_pokemon_by_pk as PokemonDTOType;

    const { id, name, pokemon_v2_pokemontypes } = pokemonData;

    const newPokemon: PokemonDetailsType = {
      id,
      name,
      types: pokemon_v2_pokemontypes.map(
        (typeItem: any) => typeItem.pokemon_v2_type.name
      ),
    };

    return newPokemon;
  }
);

const initialState = {
  isLoading: true,
  pokemon: {} as PokemonDetailsType,
} as PokemonStateType;

export const pokemonSlice = createSlice({
  name: POKEMON_REDUCER_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomPokemon.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getRandomPokemon.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.pokemon = payload;
    });
  },
});

export { getRandomPokemon };

export const pokemonReducer = pokemonSlice.reducer;
