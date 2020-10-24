import { UPDATE_NAVBAR } from "../constants";

export const updateNavbar = (scrolled) => (dispatch) => {
  dispatch({ type: UPDATE_NAVBAR, payload: { scrolled } });
};
