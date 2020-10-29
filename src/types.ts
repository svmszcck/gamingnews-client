// API

export type Game = {
  id: string;
  name: string;
  image: {
    medium_url: string;
    screen_large_url: string;
  };
  site_detail_url: string;
  description: string;
  original_release_date: string;
};

export type Genre = {
  id: string;
  name: string;
  site_detail_url: string;
};

// Redux

export type Action = {
  type: string;
  payload: any;
};

export type Store = {
  ui: UIState;
  posts: PostsState;
};

export type UIState = {
  scrolled: boolean;
};

export type PostsState = {
  games: Array<Game>;
  genres: Array<Genre>;
  searchedGames: Array<Game>;
  game: Game;
};
