import { UPDATE_USER, CLEAR_USER } from "../actions/types";

const initialState = {
  user: null,
};

export default function infoReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };

    case CLEAR_USER:
      return {
        ...state,
        user: null
      }

    default:
      return state;
  }
}
