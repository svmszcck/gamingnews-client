import { KeyboardEvent } from "react";

import { GAME_IMG_COUNT } from "app_constants/general";

export const handleEnter = (event: KeyboardEvent, action: Function) => {
  if (event.key === "Enter") action();
};

export const generateImage = () => {
  const num = randomNum(1, GAME_IMG_COUNT);
  return `${num}.jpg`;
};

export const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
