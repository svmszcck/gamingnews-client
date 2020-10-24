import { sendRequest } from "utils/api";

export const gamesService = (offset: number, sort: string) =>
  sendRequest("games", { offset, sort });
