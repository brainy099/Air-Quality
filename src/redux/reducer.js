import { actionTypes } from "./types";

const INITIAL_STATE = {
  data: {},
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
