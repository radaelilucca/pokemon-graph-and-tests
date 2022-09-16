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

const getPokemonByNameQuery = gql`
  query getPokemonById($name: String!) {
    pokemon_v2_pokemon(where: { name: { _ilike: $name } }) {
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

const getRandomPokemon = async () => {
  const firstPokemonId = 1;
  const lastPokemonId = 905;

  console.log("GET RAMNDOM");

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

  return pokemonData;
};

const getPokemonByName = async ({ pokemonName }: { pokemonName: string }) => {
  const response = await apolloClient.query({
    query: getPokemonByNameQuery,
    variables: {
      name: pokemonName,
    },
  });

  const { pokemon_v2_pokemon } = response.data;
  const pokemons = pokemon_v2_pokemon as PokemonDTOType[];
  const [pokemonData] = pokemons;

  return pokemonData;
};

interface IGetPokemonProps {
  pokemonName?: string;
}

const getPokemon = createAsyncThunk(
  `${POKEMON_REDUCER_NAME}/getPokemon`,
  async ({ pokemonName }: IGetPokemonProps) => {
    try {
      const pokemonData = pokemonName
        ? await getPokemonByName({ pokemonName })
        : await getRandomPokemon();

      const { id, name, pokemon_v2_pokemontypes } = pokemonData;

      const newPokemon: PokemonDetailsType = {
        id,
        name,
        types: pokemon_v2_pokemontypes.map(
          (typeItem: any) => typeItem.pokemon_v2_type.name
        ),
      };

      return newPokemon;
    } catch (error) {
      throw new Error("Pokemon not found");
    }
  },
  {
    // NOTE: ABORT DUPLICATED REQUESTS
    condition: (_, { getState }) => {
      type GetStateData = {
        pokemonState: PokemonStateType;
      };
      const { pokemonState } = getState() as GetStateData;

      return !pokemonState.isLoading;
    },
  }
);

const initialState = {
  isLoading: false,
  pokemon: {} as PokemonDetailsType,
  error: "",
} as PokemonStateType;

export const pokemonSlice = createSlice({
  name: POKEMON_REDUCER_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemon.pending, (state, ...props) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(getPokemon.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.pokemon = payload;
      state.error = "";
    });

    builder.addCase(getPokemon.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = "Pokemon not found";
    });
  },
});

export { getPokemon };

export const pokemonReducer = pokemonSlice.reducer;
