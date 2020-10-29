import React from "react";

import { Game } from "types";
import Styled from "./styles";

const GameView = ({ game }: GameViewProps) => {
  console.log(game);
  return <Styled></Styled>;
};

type GameViewProps = {
  game: Game;
};

export default GameView;
