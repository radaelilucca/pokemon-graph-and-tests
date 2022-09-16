const hexToRGB = (hex: string) => {
  const parsedHex = hex.replace("#", "");

  if (parsedHex.length != 6) {
    throw "HEX must have six digits";
  }

  var aRgbHex = parsedHex.match(/.{1,2}/g);

  if (aRgbHex?.length !== 3) {
    throw "Error on HEX to RGB conversion";
  }

  const [red, green, blue] = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];

  return `rgb(${red}, ${green}, ${blue})`;
};

export { hexToRGB };
