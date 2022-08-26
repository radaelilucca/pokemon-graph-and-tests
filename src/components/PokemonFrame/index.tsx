import { useEffect, useRef } from "react";
import { pokemonTypesColors } from "../../const";
import { PokemonTypes } from "../../state";
import { ConditionalRender } from "../ConditionalRenderer";
import { Container, TypesBackground } from "./styles";

interface IPokemonFrameProps {
  id: number;
  types: PokemonTypes[];
  isLoading: boolean;
}

const PokemonFrame = ({ id, types = [], isLoading }: IPokemonFrameProps) => {
  const backgroundColors = types
    .slice(0, 2)
    .map((typeItem) => pokemonTypesColors[typeItem] || "white");

  const parsedId = String(id).padStart(3, "0");

  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (isLoading && imageRef?.current) {
      imageRef.current.src = "";
    }
  }, [isLoading]);

  return (
    <Container>
      <TypesBackground backgroundColors={backgroundColors} />

      <ConditionalRender condition={!isLoading}>
        <img
          ref={imageRef}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${parsedId}.png`}
        />
      </ConditionalRender>

      <ConditionalRender condition={isLoading}>
        <img src="/images/pikachu.png" />
      </ConditionalRender>
    </Container>
  );
};

export { PokemonFrame };
