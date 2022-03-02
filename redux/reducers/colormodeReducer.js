import { SWITCH_COLORMODE } from "../actions/types";

const initialState = {
  colormode: "light",
};

export default function colormodeReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_COLORMODE:
      return {
        ...state,
        colormode: state.colormode === "light" ? "dark" : "light",
      };

    default:
      return state;
  }
}
