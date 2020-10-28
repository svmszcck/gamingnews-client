/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGames, getGenres } from "store/actions/posts";
import { PAGE_LIMIT } from "app_constants/api";
import { Store } from "types";
import HomeView from "./view";

const Home = () => {
  const dispatch = useDispatch();
  const { games, genres } = useSelector((state: Store) => state.posts);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const loadGames = (page: number) => {
    dispatch(getGames(page, PAGE_LIMIT));
  };

  return (
    <div>
      <HomeView loadGames={loadGames} games={games} genres={genres} />
    </div>
  );
};
export default Home;
