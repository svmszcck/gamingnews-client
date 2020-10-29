import { sendRequest } from "utils/api";
import { PC_PLATFORM, GAME } from "app_constants/api";

export const gameService = (id: string) => sendRequest(`game/${id}`);

export const gamesService = (offset: number, sort?: string, limit?: number) =>
  sendRequest("games", { offset, sort, limit, platforms: PC_PLATFORM });

export const genresService = () => sendRequest("genres");

export const searchService = (query: string) =>
  sendRequest("search", { query, resources: GAME });
