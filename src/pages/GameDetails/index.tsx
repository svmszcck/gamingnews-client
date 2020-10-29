/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getGame } from "store/actions/posts";
import { Store } from "types";
import GameView from "./view";

const GameDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams<Params>();
  const { game } = useSelector((state: Store) => state.posts);

  useEffect(() => {
    if (id) dispatch(getGame(id));
  }, [id]);
  return <GameView game={game} />;
};

type Params = {
  id: string;
};

export default GameDetails;
