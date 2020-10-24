import { UPDATE_NAVBAR } from "../constants";

const initialState = { scrolled: false };

const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_NAVBAR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default uiReducer;
