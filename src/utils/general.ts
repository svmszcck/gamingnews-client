import { KeyboardEvent } from "react";

export const handleEnter = (event: KeyboardEvent, action: Function) => {
  if (event.key === "Enter") action();
};
