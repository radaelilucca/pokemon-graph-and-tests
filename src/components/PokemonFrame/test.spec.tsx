/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "@jest/globals";
import { render, cleanup } from "@testing-library/react";

import { PokemonFrame, PokemonFrameTestIds } from ".";
import { pokemonTypesColors } from "../../const";
import { PokemonTypes } from "../../state";
import { hexToRGB } from "../../utils";

describe("[Component] - Pokemon Frame", () => {
  describe("Types backgrounds", () => {
    it("Should render background with two colors / two types", () => {
      const types: PokemonTypes[] = ["electric", "poison"];

      const { electric: electricColor, poison: poisonColor } =
        pokemonTypesColors;

      const { getByTestId } = render(
        <PokemonFrame isLoading={false} id={25} types={types} />
      );

      const firstTypeBgComponent = getByTestId(
        PokemonFrameTestIds.firstTypeBackground
      );
      const secondTypeBgComponent = getByTestId(
        PokemonFrameTestIds.secondTypeBackground
      );

      const { backgroundColor: firstBgColor } =
        window.getComputedStyle(firstTypeBgComponent);
      const { backgroundColor: secondBgColor } = window.getComputedStyle(
        secondTypeBgComponent
      );

      expect(firstBgColor).toBe(hexToRGB(electricColor));
      expect(secondBgColor).toBe(hexToRGB(poisonColor));
    });

    it("Should render background with single color / single type", () => {
      const types: PokemonTypes[] = ["electric"];

      const { electric: electricColor } = pokemonTypesColors;

      const { getByTestId } = render(
        <PokemonFrame isLoading={false} id={25} types={types} />
      );

      const firstTypeBgComponent = getByTestId(
        PokemonFrameTestIds.firstTypeBackground
      );
      const secondTypeBgComponent = getByTestId(
        PokemonFrameTestIds.secondTypeBackground
      );

      const { backgroundColor: firstBgColor } =
        window.getComputedStyle(firstTypeBgComponent);
      const { backgroundColor: secondBgColor } = window.getComputedStyle(
        secondTypeBgComponent
      );

      const rgbElectricColor = hexToRGB(electricColor);

      expect(firstBgColor).toBe(rgbElectricColor);
      expect(secondBgColor).toBe(rgbElectricColor);
    });
  });

  describe("Placeholder Image", () => {
    it("Should display loading placeholder image only while loading", () => {
      const types: PokemonTypes[] = ["electric"];

      const firstRender = render(
        <PokemonFrame isLoading={true} id={25} types={types} />
      );

      const firstLoadingPlaceholder = firstRender.getByTestId(
        PokemonFrameTestIds.loadingPlaceholderImg
      );

      expect(firstLoadingPlaceholder).toBeTruthy();

      cleanup();

      const secondRender = render(
        <PokemonFrame isLoading={false} id={25} types={types} />
      );

      const [secondLoadingPlaceholder] = secondRender.queryAllByTestId(
        PokemonFrameTestIds.loadingPlaceholderImg
      );

      expect(secondLoadingPlaceholder).toBeUndefined();
    });
  });
});
