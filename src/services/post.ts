import { sendRequest } from "utils/api";

export const gamesService = (offset: number, sort?: string, limit?: number) =>
  sendRequest("games", { offset, sort, limit, platforms: 94 });

export const genresService = () => sendRequest("genres");

export const searchService = (query: string) =>
  sendRequest("search", { query, resources: "game" });
