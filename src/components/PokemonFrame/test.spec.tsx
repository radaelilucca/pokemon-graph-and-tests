/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { PokemonFrame, PokemonFrameTestIds } from ".";
import { pokemonTypesColors } from "../../const";
import { PokemonTypes } from "../../state";

describe("[Component] - Pokemon Frame", () => {
  it("Should render backgrounds with type colors", () => {
    const types: PokemonTypes[] = ["electric", "poison"];

    const { electric: electricColor, poison: poisonColor } = pokemonTypesColors;

    const { getByTestId } = render(
      <PokemonFrame isLoading={false} id={25} types={types} />
    );

    const firstTypeBg = getByTestId(PokemonFrameTestIds.firstTypeBackground);
    const firstBgStyles = window.getComputedStyle(firstTypeBg);

    const secondTypeBg = getByTestId(PokemonFrameTestIds.secondTypeBackground);

    const secondBgStyles = window.getComputedStyle(secondTypeBg);

    expect(firstBgStyles.backgroundColor).toBe(electricColor);
    expect(secondBgStyles.backgroundColor).toBe(poisonColor);
  });
});
