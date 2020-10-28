import React from "react";

import { Game, Genre } from "types";
import Cover from "./Cover";
import Genres from "./Genres";
import Games from "./Games";
import Styled from "./styles";

const HomeView = ({ loadGames, games, genres }: HomeViewProps) => {
  return (
    <Styled>
      <div className="container is-fluid">
        <div className="topSection">
          <Cover />
        </div>
        <Genres elements={genres} />
        <Games elements={games} loadElements={loadGames} />
      </div>
    </Styled>
  );
};

type HomeViewProps = {
  loadGames: (page: number) => void;
  games: Array<Game>;
  genres: Array<Genre>;
};

export default HomeView;
