import { getRandomIntInRange } from ".";

import { describe, expect, it } from "@jest/globals";

describe("[Util] - Get random int in range", () => {
  const props = {
    min: 1,
    max: 5000,
  };

  it(`Should generate an integer between ${props.min} and ${props.max}`, () => {
    const randomInteger = getRandomIntInRange(props);

    const isInRange = randomInteger >= props.min && randomInteger <= props.max;

    expect(isInRange).toBe(true);
  });
});
