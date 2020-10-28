import { gamesService, genresService, searchService } from "services/post";

import {
  UPDATE_GAMES,
  UPDATE_GENRES,
  UPDATE_SEARCHED_GAMES,
} from "../constants";

export const getGames = (offset: number, limit?: number) => async (
  dispatch: Function
) => {
  const data = await gamesService(offset, "original_release_date", limit);
  if (data?.results) {
    dispatch({ type: UPDATE_GAMES, payload: { games: data.results } });
  }
};

export const getGenres = () => async (dispatch: Function) => {
  const data = await genresService();
  if (data?.results) {
    dispatch({ type: UPDATE_GENRES, payload: { genres: data.results } });
  }
};

export const search = (query: string) => async (dispatch: Function) => {
  const data = await searchService(query);
  if (data?.results) {
    dispatch({
      type: UPDATE_SEARCHED_GAMES,
      payload: { searchedGames: data.results },
    });
  }
};
