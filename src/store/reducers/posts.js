import {
  UPDATE_GAMES,
  UPDATE_GENRES,
  UPDATE_SEARCHED_GAMES,
} from "../constants";

const initialState = {
  games: [],
  genres: [],
  searchedGames: [],
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_GAMES:
      return { ...state, games: [...state.games, ...payload.games] };
    case UPDATE_GENRES:
      return { ...state, ...payload };
    case UPDATE_SEARCHED_GAMES:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default postReducer;
