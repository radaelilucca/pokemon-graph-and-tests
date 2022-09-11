import { useEffect, useRef } from "react";
import { pokemonTypesColors } from "../../const";
import { PokemonTypes } from "../../state";
import { ConditionalRender } from "../ConditionalRenderer";
import {
  Container,
  FirstTypeBackground,
  SecondTypeBackground,
  TypesBackgroundsContainer,
} from "./styles";

interface IPokemonFrameProps {
  id: number;
  types: PokemonTypes[];
  isLoading: boolean;
}

export const PokemonFrameTestIds = {
  container: "PokemonFrameContainer",
  firstTypeBackground: "PokemonFrameFirstBackground",
  secondTypeBackground: "PokemonFrameSecondBackground",
};

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
    <Container data-testid={PokemonFrameTestIds.container}>
      <TypesBackgroundsContainer>
        <FirstTypeBackground
          data-testid={PokemonFrameTestIds.firstTypeBackground}
          backgroundColor={backgroundColors[0]}
        />
        <SecondTypeBackground
          data-testid={PokemonFrameTestIds.secondTypeBackground}
          backgroundColor={backgroundColors[1] || backgroundColors[0]}
        />
      </TypesBackgroundsContainer>
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
