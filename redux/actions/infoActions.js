import { CLEAR_USER, UPDATE_USER } from "../actions/types";

export const register = (name, email, password, type) => (dispatch) => {
  dispatch({
    type: UPDATE_USER,
    payload: { name, email, password, type },
  });
};

export const logout = () => {
  return {
    type: CLEAR_USER
  }
}
