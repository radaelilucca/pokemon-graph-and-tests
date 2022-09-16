import { pokemonTypesColors } from "../../const";

export type PokemonTypes = keyof typeof pokemonTypesColors;

export type PokemonDetailsType = {
  id: number;
  name: string;
  types: PokemonTypes[];
};

export type PokemonStateType = {
  pokemon: PokemonDetailsType;
  isLoading: boolean;
  error: string;
};

// Generated by https://quicktype.io

export type PokemonDTOType = {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: {
    id: number;
    pokemon_v2_type: {
      name: string;
      __typename: string;
    };
    __typename: string;
  }[];
  __typename: string;
};
