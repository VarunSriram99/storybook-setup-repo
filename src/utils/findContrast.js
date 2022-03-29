import hexToRGB from "./hexToRGB";

const findContrast = (hex) => {
  const [r, g, b] = hexToRGB(hex);
  const brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);
  const textColour =
    brightness > 200 ? "cs-ui-tag--text-black" : "cs-ui-tag--text-white";
  return textColour;
};

export default findContrast;
