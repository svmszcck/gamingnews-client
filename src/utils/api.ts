import axios from "axios";

import { BASE_URL } from "app_constants/api";
import { API_KEY } from "app_config";

export const sendRequest = async (path: string, params: object = {}) => {
  const response = await axios.get(`${BASE_URL}/${path}`, {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });
  return response?.data;
};
