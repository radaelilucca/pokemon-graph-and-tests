import { hexToRGB } from ".";

import { describe, expect, it } from "@jest/globals";

describe("[Util] - RGB to HEX", () => {
  it("Should convert a white HEX to RGB", () => {
    const whiteHEX = "#FFFFFF";
    const whiteRGB = "rgb(255, 255, 255)";

    const whiteHEXInRGB = hexToRGB(whiteHEX);

    expect(whiteHEXInRGB).toBe(whiteRGB);
  });

  it("Should trow an error when HEX is not 6 digits", () => {
    const whiteHEX = "#FFF";

    expect(() => hexToRGB(whiteHEX)).toThrowError();
  });
});
