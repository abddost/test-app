import { generateRandomColor } from "@utils";

export const handleColorTap = (
  setBgColor: (color: string) => void,
  setColorCode: (color: string) => void
) => {
  const newColor = generateRandomColor();
  setBgColor(newColor);
  setColorCode(newColor);
};
